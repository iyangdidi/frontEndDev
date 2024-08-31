export default function circle(...args) {
    // corder case
    if (args.length === 0) {
        return;
    }

    // circle logic
    let currentIndex = 0;
    return () => {
        let res = args[currentIndex % args.length];
        currentIndex++;
        return res;
    };
}
