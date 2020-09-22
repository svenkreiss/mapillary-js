import {empty as observableEmpty, Observable} from "rxjs";

import {catchError, retry} from "rxjs/operators";

import {
    ICoreNode,
    IFillNode,
    IFullNode,
    ISequence,
    ModelCreator,
} from "../../src/API";
import API from "../../src/api/API";
import DataProvider from "../../src/api/DataProvider";

describe("API.ctor", () => {
    it("should create an API instance", () => {
        const api: API = new API(undefined);
        expect(api).toBeDefined();
    });
});

describe("API.imageByKeyFill$", () => {
    it("should call data provider correctly", (done: Function) => {
        const promise: any = {
            then: (resolve: (result: any) => void, reject: (error: Error) => void): void => {
                resolve({});
            },
        };

        const provider: DataProvider = new DataProvider(null);
        const providerSpy: jasmine.Spy = spyOn(provider, "getFillImages");
        providerSpy.and.returnValue(promise);

        const api: API = new API(provider);

        const key: string = "key";

        api.imageByKeyFill$([key])
            .subscribe(
                (result: { [key: string]: IFillNode}): void => {
                    expect(result).toBeDefined();

                    expect(providerSpy.calls.count()).toBe(1);
                    expect(providerSpy.calls.first().args[0].length).toBe(1);
                    expect(providerSpy.calls.first().args[0][0]).toBe(key);

                    done();
                });
    });

    it("should pass on error", (done: Function) => {
        const promise: any = {
            then: (resolve: (result: any) => void, reject: (error: Error) => void): void => {
                reject(new Error());
            },
        };

        const provider: DataProvider = new DataProvider(null);
        const providerSpy: jasmine.Spy = spyOn(provider, "getFillImages");
        providerSpy.and.returnValue(promise);

        const api: API = new API(provider);

        const key: string = "key";

        api.imageByKeyFill$([key]).pipe(
            catchError(
                (err: Error): Observable<{}> => {
                    expect(err).toBeDefined();
                    expect(err instanceof Error).toBe(true);

                    return observableEmpty();
                }))
            .subscribe(
                undefined,
                undefined,
                (): void => { done(); });
    });
});

describe("API.imageByKeyFull$", () => {
    it("should call provider correctly", (done: Function) => {
        const promise: any = {
            then: (resolve: (result: any) => void, reject: (error: Error) => void): void => {
                resolve({});
            },
        };

        const provider: DataProvider = new DataProvider(null);
        const providerSpy: jasmine.Spy = spyOn(provider, "getFullImages");
        providerSpy.and.returnValue(promise);

        const api: API = new API(provider);

        const key: string = "key";

        api.imageByKeyFull$([key])
            .subscribe(
                (result: { [key: string]: IFillNode}): void => {
                    expect(result).toBeDefined();

                    expect(providerSpy.calls.count()).toBe(1);
                    expect(providerSpy.calls.first().args[0].length).toBe(1);
                    expect(providerSpy.calls.first().args[0][0]).toBe(key);

                    done();
                });
    });

    it("should pass on error", (done: Function) => {
        const promise: any = {
            then: (resolve: (result: any) => void, reject: (error: Error) => void): void => {
                reject(new Error());
            },
        };

        const provider: DataProvider = new DataProvider(null);
        const providerSpy: jasmine.Spy = spyOn(provider, "getFullImages");
        providerSpy.and.returnValue(promise);

        const api: API = new API(provider);

        const key: string = "key";

        api.imageByKeyFull$([key]).pipe(
            catchError(
                (err: Error): Observable<{}> => {
                    expect(err).toBeDefined();
                    expect(err instanceof Error).toBe(true);

                    return observableEmpty();
                }))
            .subscribe(
                undefined,
                undefined,
                (): void => { done(); });
    });
});

describe("API.imagesByH$", () => {
    it("should call provider correctly", (done: Function) => {
        const promise: any = {
            then: (resolve: (result: any) => void, reject: (error: Error) => void): void => {
                resolve({});
            },
        };

        const provider: DataProvider = new DataProvider(null);
        const providerSpy: jasmine.Spy = spyOn(provider, "getCoreImages");
        providerSpy.and.returnValue(promise);

        const api: API = new API(provider);

        const h: string = "h";

        api.imagesByH$([h])
            .subscribe(
                (result: { [key: string]: { [index: string]: ICoreNode } }): void => {
                    expect(result).toBeDefined();

                    expect(providerSpy.calls.count()).toBe(1);
                    expect(providerSpy.calls.first().args[0].length).toBe(1);
                    expect(providerSpy.calls.first().args[0][0]).toBe(h);

                    done();
                });
    });

    it("should pass on error", (done: Function) => {
        const promise: any = {
            then: (resolve: (result: any) => void, reject: (error: Error) => void): void => {
                reject(new Error());
            },
        };

        const provider: DataProvider = new DataProvider(null);
        const providerSpy: jasmine.Spy = spyOn(provider, "getCoreImages");
        providerSpy.and.returnValue(promise);

        const api: API = new API(provider);

        const h: string = "h";

        api.imagesByH$([h]).pipe(
            catchError(
                (err: Error): Observable<{}> => {
                    expect(err).toBeDefined();
                    expect(err instanceof Error).toBe(true);

                    return observableEmpty();
                }))
            .subscribe(
                undefined,
                undefined,
                (): void => { done(); });
    });
});

describe("API.sequenceByKey$", () => {
    it("should call provider correctly", (done: Function) => {
        const promise: any = {
            then: (resolve: (result: any) => void, reject: (error: Error) => void): void => {
                resolve({});
            },
        };

        const provider: DataProvider = new DataProvider(null);
        const providerSpy: jasmine.Spy = spyOn(provider, "getSequences");
        providerSpy.and.returnValue(promise);

        const api: API = new API(provider);

        const skey: string = "skey";

        api.sequenceByKey$([skey])
            .subscribe(
                (result: { [key: string]: ISequence }): void => {
                    expect(result).toBeDefined();

                    expect(providerSpy.calls.count()).toBe(1);
                    expect(providerSpy.calls.first().args[0].length).toBe(1);
                    expect(providerSpy.calls.first().args[0][0]).toBe(skey);

                    done();
                });
    });

    it("should pass on error", (done: Function) => {
        const promise: any = {
            then: (resolve: (result: any) => void, reject: (error: Error) => void): void => {
                reject(new Error());
            },
        };

        const provider: DataProvider = new DataProvider(null);
        const providerSpy: jasmine.Spy = spyOn(provider, "getSequences");
        providerSpy.and.returnValue(promise);

        const api: API = new API(provider);

        const skey: string = "skey";

        api.sequenceByKey$([skey]).pipe(
            catchError(
                (err: Error): Observable<{}> => {
                    expect(err).toBeDefined();
                    expect(err instanceof Error).toBe(true);

                    return observableEmpty();
                }))
            .subscribe(
                undefined,
                undefined,
                (): void => { done(); });
    });
});

describe("API.setToken", () => {
    it("should call provider correctly", () => {
        const provider: DataProvider = new DataProvider(null);
        const providerSpy: jasmine.Spy = spyOn(provider, "setToken");

        const api: API = new API(provider);

        api.setToken("token");

        expect(providerSpy.calls.count()).toBe(1);
        expect(providerSpy.calls.first().args[0]).toBe("token");
    });
});