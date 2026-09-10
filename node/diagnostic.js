export class Diagnostic extends Error {
    location;
    constructor(location, message) {
        super(`${location}: ${message}`);
        this.location = location;
        this.name = 'Diagnostic';
    }
}
//# sourceMappingURL=diagnostic.js.map