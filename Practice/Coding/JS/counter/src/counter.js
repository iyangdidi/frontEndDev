(() => {
    let counter = 0;
    const counterBtn = document.querySelector('.button-counter');
    const counterText = document.querySelector('.button__text');
    counterBtn.addEventListener('click', () => {
        counterText.textContent = `Button cliked times: ${++counter}`
    })
})()