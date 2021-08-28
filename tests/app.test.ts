import { App } from './../src/classes/App';

describe('Pattern Decorateur app test', () => {
    
    it("Colombia", ()=>{
        expect(App.main()).toBe("Colombia: Lait, Chocolat, €1.30");
    });

    it("Expresso", ()=>{
        expect(App.main2()).toBe("Expresso: €1.99");
    });
})
