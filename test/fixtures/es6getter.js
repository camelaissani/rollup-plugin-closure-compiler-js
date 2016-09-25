export class Route {
    constructor(uriPart) {
        this.uriPart = uriPart;
    }

    get uri() {
        return this.uriPart;
    }
}

export class Router {};