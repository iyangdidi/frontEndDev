export function isBoolean(value) {
    return typeof value === "boolean";
}

export function isNumber(value) {
    return typeof value === "number";
}

export function isNull(value) {
    return value === null;
}

export function isString(value) {
    return typeof value === "string";
}

export function isSymbol(value) {
    return typeof value === "symbol";
}

export function isUndefined(value) {
    return typeof value === "undefined";
}

// advance

export function isArray(value) {
    return Array.isArray(value);
}

export function isArray2(value) {
    if (value == null) {
        return false;
    }
    return value.constructor === Array;
}

export function isFunction(value) {
    return typeof value === "function";
}

export function isObject(value) {
    // null || undefined
    if (value == null) {
        return false;
    }

    return typeof value === "object" || typeof value === "function";
}

export function isPlainObject(value) {
    if (value == null) {
        return false;
    }

    const prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.prototype;
}

// Lodash implementation
export function isPlainObject2(value) {
    if (!isObject(value)) {
        return false;
    }

    // For objects created via Object.create(null);
    if (Object.getPrototypeOf(value) === null) {
        return true;
    }

    let proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }

    return Object.getPrototypeOf(value) === proto;
}
