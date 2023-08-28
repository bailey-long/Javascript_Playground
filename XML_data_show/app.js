// JavaScript code to populate the table with CSV data
fetch('regions.csv')
.then(response => response.text())
.then(data => {
    const rows = data.split('\n');
    const table = document.querySelector('#regionsTable');

    // Create header row
    const headerRow = document.createElement('tr');
    const headers = rows[0].split(',');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    table.querySelector('thead').appendChild(headerRow);

    // Create data rows
    for (let i = 1; i < rows.length; i++) {
        const rowData = rows[i].split(',');
        const row = document.createElement('tr');
        rowData.forEach(cellData => {
            const cell = document.createElement('td');
            if(i%2==0){
                cell.style.backgroundColor = "#5ca8e9";
            } else {
                cell.style.backgroundColor = "#daeaf8";
            }
            cell.textContent = cellData;
            row.appendChild(cell);
        });
        table.querySelector('tbody').appendChild(row);
    }
});

fetch('historical_figures.csv')
.then(response => response.text())
.then(data => {
    const rows = data.split('\n');
    const table = document.querySelector('#historicalFiguresTable');

    // Create header row
    const headerRow = document.createElement('tr');
    const headers = rows[0].split(',');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    table.querySelector('thead').appendChild(headerRow);

    // Create data rows
    for (let i = 1; i < rows.length; i++) {
        const rowData = rows[i].split(',');
        const row = document.createElement('tr');
        rowData.forEach(cellData => {
            const cell = document.createElement('td');
            if(i%2==0){
                cell.style.backgroundColor = "#5ca8e9";
            } else {
                cell.style.backgroundColor = "#daeaf8";
            }
            cell.textContent = cellData;
            row.appendChild(cell);
        });
        table.querySelector('tbody').appendChild(row);
    }
});