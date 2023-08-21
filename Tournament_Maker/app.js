document.addEventListener('DOMContentLoaded', function() {
    const contestants = []; // Array to store contestants
    const contestantDisplayer = document.getElementById('contestants');
  
    document.getElementById('contestantForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const commander = document.getElementById('commander').value;
  
      const contestant = {
        name: name,
        commander: commander
      };
  
      contestants.push(contestant);
      console.log(contestants);
  
      // Display contestant in list
      contestantDisplayer.innerHTML = contestantDisplayer.innerHTML + `<li>${name} - ${commander}</li>`;
  
      // Clear form
      document.getElementById('contestantForm').reset();
    });
  
    // Attach event listener to parent element using event delegation
    document.addEventListener('click', function(event) {
      if (event.target.id === 'startTournament') {
        // Code for generating and displaying bracket matches
        const matches = [];
  
        // Create matches by pairing contestants
        for (let i = 0; i < contestants.length; i += 2) {
          const match = {
            contestant1: contestants[i],
            contestant2: contestants[i + 1],
            winner: null // Winner will be determined later
          };
          matches.push(match);
        }
  
        const bracketMatchesDiv = document.getElementById('bracketMatches');
        bracketMatchesDiv.innerHTML = '';
  
        // Generate and display bracket matches
        for (let i = 0; i < matches.length; i++) {
          const match = matches[i];
          const matchDiv = document.createElement('div');
          matchDiv.className = 'match';
  
          const contestant1Div = document.createElement('div');
          contestant1Div.className = 'contestant';
          contestant1Div.textContent = match.contestant1 ? match.contestant1.name : 'TBD';
  
          const contestant2Div = document.createElement('div');
          contestant2Div.className = 'contestant';
          contestant2Div.textContent = match.contestant2 ? match.contestant2.name : 'TBD';
  
          matchDiv.appendChild(contestant1Div);
          matchDiv.appendChild(contestant2Div);
  
          bracketMatchesDiv.appendChild(matchDiv);
        }
      }
    });
  });
  