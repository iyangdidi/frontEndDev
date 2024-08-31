/**
 * Special: bind `this`
 */

function exmaple() {
    const increment = debounce(function (this: any, delta: number) {
        this.val += delta;
    }, 10);

    const obj = {
        val: 2,
        increment,
    };
}

function debounce(func, wait = 0) {
    let timeoutId = null;
    return function (...args) {
        // () => won't work with `this`
        clearTimeout(timeoutId);
        const context = this;
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}

export default debounce;
