class autoTimer {
    constructor() {
        let timer;

        return (delay, callback) => {
            if (timer) clearTimeout(timer);
        	timer = setTimeout(callback, delay);

        	return timer;
        }
    }
}

export default autoTimer;
