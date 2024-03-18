document.addEventListener("DOMContentLoaded", () => {
    const newRowButton = document.getElementById('newRowButton');
    const jokeriNumbersTable = document.getElementById('jokeriNumbersTable');
    const rowCountParagraph = document.getElementById('rowCount');
    let rowCount = 0;

    const generateJokeriRow = () => {
        rowCount++;
        rowCountParagraph.textContent = `Valmiita rivejä: ${rowCount}`;
        const newRow = document.createElement('tr');
        for (let i = 0; i < 7; i++) {
            const randomNumber = Math.floor(Math.random() * 10);
            const newCell = document.createElement('td');
            newCell.textContent = randomNumber;
            newRow.appendChild(newCell);
        }
        jokeriNumbersTable.appendChild(newRow);
    };

    newRowButton.addEventListener('click', generateJokeriRow);
});