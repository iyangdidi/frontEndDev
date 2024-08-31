export async function getJobIds() {
    const url = "https://hacker-news.firebaseio.com/v0/jobstories.json";

    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .catch((e) => {
            throw e;
        });
}

export async function getJobDetailById(id) {
    const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .catch((e) => {
            throw e;
        });
}

export async function getJobDetailByIds(idsArray) {
    const jobsDetailPromises = idsArray.map((id) => getJobDetailById(id));
    const jobsDetail = await Promise.all(jobsDetailPromises);
    return jobsDetail;
}
