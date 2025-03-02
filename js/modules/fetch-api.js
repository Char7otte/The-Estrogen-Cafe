class CallAPI {
    constructor(url, config, purpose) {
        this.url = url;
        this.config = config;
        this.purpose = purpose;
    }

    async get() {
        const { url, config, purpose } = this;
        try {
            const res = await axios.get(url, config);
            return res;
        } catch (e) {
            console.error(purpose + " " + e);
        }
    }
}

export { CallAPI };
