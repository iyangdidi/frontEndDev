(function tab() {
    const tabs = document
        .querySelector("#tabs")
        .querySelectorAll('[class^="tab_"]');

    const p = document.querySelector("#tab_content");

    const panels = document.querySelectorAll('[id^="tab_content_"]');

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs.forEach((t) => t.classList.remove("active"));
            panels.forEach((p) => p.classList.remove("active"));

            tab.classList.add("active");
            const targetPanel = document.querySelector(
                `#${tab.dataset.target}`
            );
            targetPanel.classList.add("active");
        });
    });
})();
