class Deferred<T = void> {
    status: 'pending' | 'resolved' | 'rejected' = 'pending';
    promise: Promise<T>;
    resolve: (value: T) => void = () => {
        throw new Error('not implemented');
    };
    reject: (reason?: unknown) => void = () => {
        throw new Error('not implemented');
    };
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = value => {
                if (this.status === 'pending') {
                    this.status = 'resolved';
                    resolve(value);
                }
            };
            this.reject = reason => {
                if (this.status === 'pending') {
                    this.status = 'rejected';
                    reject(reason);
                }
            };
        });
    }
}

export { Deferred };
