class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    /**
     * @param {string} eventName
     * @param {Function} listener
     * @returns {EventEmitter}
     */
    on = (eventName, listener) => {
        const listeners = this.events.get(eventName);
        const newLiseners = listeners ? listeners : [];
        newLiseners.push(listener);
        this.events.set(eventName, newLiseners);
        return this;
    };

    /**
     * @param {string} eventName
     * @param {Function} listener
     * @returns {EventEmitter}
     */
    off = (eventName, listener) => {
        const listeners = this.events.get(eventName);
        const offListenerIdx = listeners
            ? listeners.findIndex((listenerItem) => listenerItem === listener)
            : -1;
        if (offListenerIdx > -1) {
            if (listeners.length === 1) {
                this.events.delete(eventName);
            } else {
                this.events.get(eventName, listeners).splice(offListenerIdx, 1);
            }
        }
        return this;
    };

    /**
     * @param {string} eventName
     * @param  {...any} args
     * @returns {boolean}
     */
    emit = (eventName, ...args) => {
        const listeners = this.events.get(eventName);
        if (!listeners) {
            return false;
        }
        listeners.forEach((listener) => listener(...args));
        return true;
    };
}

// export default EventEmitter;

const emitter = new EventEmitter();

let sum = 0;
function addTwoNumbers(a, b) {
    sum = a + b;
}
emitter.on("foo", addTwoNumbers);
emitter.emit("foo", 2, 5);
// expect(emitter.emit("foo", 2, 5)).toBe(true);
// expect(sum).toBe(7);

let product = 0;
function multiplyTwoNumbers(a, b) {
    product = a * b;
}
emitter.on("foo", multiplyTwoNumbers);
emitter.emit("foo", 4, 5);
// expect(emitter.emit("foo", 4, 5)).toBe(true);
// expect(sum).toBe(9);
// expect(product).toBe(20);

emitter.off("foo", addTwoNumbers);
emitter.emit("foo", -3, 9);
console.log(sum, product);
// expect(emitter.emit("foo", -3, 9)).toBe(true);
// expect(sum).toBe(9);
// expect(product).toBe(-27);

// emitter.off("foo", multiplyTwoNumbers);
// expect(emitter.emit("foo", 3, 7)).toBe(false);
// expect(sum).toBe(9);
// expect(product).toBe(-27);
