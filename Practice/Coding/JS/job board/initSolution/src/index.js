import { getJobIds, getJobDetailByIds } from "./services.js";

// Global states, can be hosted in Redux in React framework
let pageIdx = 1;
let listSize = 6;
let currentJobs = [];
let jobIds = [];
let totalPages = 0;
// let hasMore = false;

async function renderJobList() {
    const startIdx = (pageIdx - 1) * listSize;
    const endIdx = pageIdx * listSize - 1;
    currentJobs = await getJobDetailByIds(jobIds.slice(startIdx, endIdx + 1));
    const jobListElem = document.querySelector("#jobList");

    jobListElem.innerHTML =
        jobListElem.innerHTML +
        currentJobs.map((job) => JobItemTemplate(job)).join("");
}

function JobItemTemplate(job) {
    return `
        <div class="job_item">
            <div class="job_title">${
                job.url
                    ? `<a target="_blank" href="${job.url}">${job.title}</a>`
                    : job.title
            }</div>
            <div>
                <span class="job_by">by ${job.by}</span>
                <span class="job_time">${new Date(
                    job.time
                ).toLocaleDateString()}</span>
            </div>
        </div>
    `;
}

function renderLoadMore() {
    document.querySelector("#loadMode").disabled = pageIdx === totalPages;
}

async function startApp() {
    jobIds = await getJobIds();
    totalPages = Math.ceil(jobIds.length / listSize);

    renderJobList();
    renderLoadMore();

    document.querySelector("#loadMode").addEventListener("click", async () => {
        pageIdx++;
        renderJobList();
        renderLoadMore();
    });
}

startApp();

// TODO
// 1. a11y: keyboard navigation; screen reader
// 2. i18n
// 3. error handling
// 4. loading
