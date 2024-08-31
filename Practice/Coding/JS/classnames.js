function classNames(...args) {
    let res = handleArray(args);

    // args.forEach((arg) => {
    //     if (arg) {
    //         if (Array.isArray(arg)) {
    //             // arr
    //             res = res + " " + handleArray(arg);
    //         } else if (isObj(arg)) {
    //             // obj
    //             res = res + " " + handleObj(arg);
    //         } else {
    //             res = res + " " + arg;
    //         }
    //     }
    // });

    return res.trim();
}

function handleObj(obj) {
    let res = "";
    Object.keys(obj).forEach((key) => {
        if (obj[key]) {
            res = res + key + " ";
        }
    });
    return res.trim();
}

function handleArray(arr) {
    console.log("handleArray:", arr);
    let res = "";
    arr.forEach((v) => {
        if (!v) {
            return;
        }

        if (Array.isArray(v)) {
            res = res + " " + handleArray(v);
        } else if (isObj(v)) {
            res = res + " " + handleObj(v);
        } else {
            res = res + " " + v;
        }
    });
    return res.trim();
}

function isObj(value) {
    return typeof value === "object" && value != null;
}
export default classNames;
