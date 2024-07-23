// Example values from the provided table
const table1Data = {
    A5: 2,
    A7: 5,
    A12: 3,
    A13: 90,
    A15: 80,
    A20: 28
};

// Calculate values for Table 2
const alpha = table1Data.A5 + table1Data.A20;
const beta = Math.floor(table1Data.A15 / table1Data.A7); // Ensure integer value
const charlie = table1Data.A13 * table1Data.A12;

// Display Table 1 data
const table1 = [
    { index: 'A1', value: 41 },
    { index: 'A2', value: 18 },
    { index: 'A3', value: 21 },
    { index: 'A4', value: 63 },
    { index: 'A5', value: 2 },
    { index: 'A6', value: 53 },
    { index: 'A7', value: 5 },
    { index: 'A8', value: 57 },
    { index: 'A9', value: 60 },
    { index: 'A10', value: 93 },
    { index: 'A11', value: 28 },
    { index: 'A12', value: 3 },
    { index: 'A13', value: 90 },
    { index: 'A14', value: 39 },
    { index: 'A15', value: 80 },
    { index: 'A16', value: 88 },
    { index: 'A17', value: 49 },
    { index: 'A18', value: 60 },
    { index: 'A19', value: 26 },
    { index: 'A20', value: 28 }
];

const table1Body = document.getElementById('table1').getElementsByTagName('tbody')[0];
table1.forEach(row => {
    const newRow = table1Body.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    cell1.innerText = row.index;
    cell2.innerText = row.value;
});

// Display values in Table 2
document.getElementById('alpha').innerText = alpha;
document.getElementById('beta').innerText = beta;
document.getElementById('charlie').innerText = charlie;

// Function to print the page as PDF
function printPage() {
    window.print();
}
