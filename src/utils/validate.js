const toString = Object.prototype.toString;

export function is(val, type) {
    return toString.call(val) === `[object ${type}]`;
}

export const isDef = val => {
    return typeof val !== 'undefined';
};

export const isUnDef = val => {
    return !isDef(val);
};

export const isObject = (val) => {
    return val !== null && is(val, 'Object');
};

export function isDate(val) {
    return is(val, 'Date');
}

export function isNull(val) {
    return val === null;
}

export function isNumber(val) {
    return is(val, 'Number');
}

export function isPromise(val) {
    return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

export function isString(val) {
    return is(val, 'String');
}

export const isFunction = (val) => typeof val === 'function';

export function isBoolean(val) {
    return is(val, 'Boolean');
}

export function isRegExp(val) {
    return is(val, 'RegExp');
}

export function isArray(val) {
    return val && Array.isArray(val);
}

export function isNaN(val) {
    if (Number.isNaN) {
        return Number.isNaN(val);
    }
    return val !== val;
}

export const inBrowser = typeof window !== 'undefined';

export function isAndroid() {
    return inBrowser ? /android/.test(navigator.userAgent.toLowerCase()) : false;
}

export function isIOS() {
    return inBrowser
        ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())
        : false;
}

export function isMobile(value) {
    value = value.replace(/[^-|\d]/g, '');
    return (
        /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value)
    );
}

export function isEmail(value) {
    const reg = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
    return reg.test(value);
}
