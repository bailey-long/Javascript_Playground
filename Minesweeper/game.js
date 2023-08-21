// Define the chords and their associated notes
const chords = [
    { name: "G", notes: ["G", "B", "D"] },
    { name: "D", notes: ["D", "F#", "A"] },
    { name: "Em", notes: ["E", "G", "B"] },
    { name: "C", notes: ["C", "E", "G"] },
  ];
  
  // Define the chord progression as an array of indices into the chords array
  const progression = [0, 3, 1, 2];
  
  // Define a function to choose a random chord from the chords array
  function chooseChord() {
    const index = Math.floor(Math.random() * chords.length);
    return chords[index];
  }
  
  // Define a function to generate a random song
  function generateSong() {
    let song = "";
    for (let i = 0; i < progression.length; i++) {
      const chord = chooseChord();
      song += `${chord.name} `;
      song += `${chord.notes.join(" ")}\n`;
    }
    return song;
  }
  
  // Call the generateSong function to create a new random song
  console.log(generateSong(), generateDeathMetalLyrics());

  function generateDeathMetalLyrics() {
    const pronouns = ['I', 'We', 'You'];
    const verbs = ["slaughter", "butcher", "maim", "exterminate", "annihilate", "crush", "disembowel", "devour", "flay", "eviscerate", "obliterate", "crucify", "impale", "decapitate", "dismember", "dissect", "incinerate", "pulverize", "smash", "torture", "mutilate", "violate", "assassinate", "execute", "massacre", "exterminate", "mangle", "rend", "sunder", "sacrifice"];
    const objects = ["corpses", "innocents", "enemies", "foes", "bodies", "carrions", "victims", "sacrifices", "remains", "cadavers", "bones", "offal", "offering", "vessels", "altars", "flesh", "guts", "viscera", "blood", "souls", "heads", "organs", "limbs", "eyes", "tongues", "hearts", "spines", "brains", "ribs", "veins"];
  
  
    let verse = '';
  
    for (let i = 0; i < 4; i++) {
      const pronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
      const verb = verbs[Math.floor(Math.random() * verbs.length)];
      const object = objects[Math.floor(Math.random() * objects.length)];
  
      verse += `${pronoun} ${verb} ${object}\n`;
    }
  
    return verse;
  }
  
  