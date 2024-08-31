import { getPaginatedUserData, getTotalPages } from "./service/services.js";

let currentPage = 1;
let usersPerPage = 10;

function renderTable() {
    const users = getPaginatedUserData(currentPage, usersPerPage);
    const tableBody = document.querySelector("#tableContainer tbody");
    tableBody.innerHTML = "";
    users.forEach((user) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.age}</td>
          <td>${user.occupation}</td>
        `;
    });
}
function renderPagination() {
    const prePage = document.querySelector("#prePage");
    const nextPage = document.querySelector("#nextPage");
    const pageInfo = document.querySelector("#pageInfo");
    const usersPerPageSelector = document.querySelector("#usersPerPage");

    const options = [5, 10, 20]
        .map(
            (value) =>
                `<option value="${value}" ${
                    usersPerPage === value ? "selected" : ""
                }>${value}</option>`
        )
        .reduce((a, b) => a + b, "");
    usersPerPageSelector.innerHTML = options;

    // <option value="5">5</option>
    // <option value="10">10</option>
    // <option value="20">20</option>

    pageInfo.textContent = `${currentPage} / ${usersPerPage}`;
    prePage.disabled = currentPage === 1;
    nextPage.disabled = currentPage === getTotalPages(usersPerPage);
}

function setupEventsHandler() {
    const prePage = document.querySelector("#prePage");
    const nextPage = document.querySelector("#nextPage");

    prePage.addEventListener("click", () => {
        currentPage--;
        renderTable();
        renderPagination();
    });

    nextPage.addEventListener("click", () => {
        currentPage++;
        renderTable();
        renderPagination();
    });

    const usersPerPageSelector = document.querySelector("#usersPerPage");
    usersPerPageSelector.addEventListener("change", (e) => {
        usersPerPage = parseInt(e.target.value, 10);
        currentPage = 1;
        renderTable();
        renderPagination();
    });
}

setupEventsHandler();
renderTable();
renderPagination();
