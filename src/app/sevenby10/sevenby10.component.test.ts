import { describe, expect, test, beforeAll } from "@jest/globals";
import { Sevenby10Component } from "./sevenby10.component";
import { bootstrap } from "@gsilber/webez";

describe("Sevenby10Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Sevenby10Component>(Sevenby10Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Sevenby10Component);
        });
    });
});
