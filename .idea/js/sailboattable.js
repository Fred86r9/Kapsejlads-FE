import {fetchAnyUrl} from "../module/modulejson.js"

console.log("I'm in sailboattable")

const urlAllSailboats = 'http://localhost:8080/allsailboats'

const tblSailboats = document.getElementById("tblSailboats")

function createTable(sailboat)
{
    let cellCount = 0
    let rowCount = tblSailboats.rows.length

    let row = tblSailboats.insertRow(rowCount)

    let cell = row.insertCell(cellCount++)
    cell.innerHTML = sailboat.id

    cell = row.insertCell(cellCount++)
    cell.innerHTML = sailboat.boatType

}


let sailboats = []
async function fetchAllSailboats()
{
    const colhead = document.getElementById("colhead")
    tblSailboats.innerHTML = ""
    tblSailboats.appendChild(colhead)
    sailboats = await fetchAnyUrl(urlAllSailboats)
    sailboats.forEach(createTable)
}


document.addEventListener("DOMContentLoaded", () => {fetchAllSailboats()})

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const darkModeToggle = document.createElement('div');
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.innerHTML = '🌙';

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    document.body.appendChild(darkModeToggle);
});