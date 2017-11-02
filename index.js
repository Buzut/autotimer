function autoTimer() {
    let timer;

    return (delay, callback) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(callback, delay);

        return timer;
    };
}

module.exports = autoTimer();
