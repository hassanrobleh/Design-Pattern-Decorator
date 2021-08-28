import { App } from './../src/classes/App';

describe('Pattern Decorateur app test', () => {
    
    // xit("Colombia", ()=>{
    //     expect(App.maina()).toBe("Colombia: Lait, Chocolat, €1.30");
    // });

    it.only("Expresso", ()=>{
        expect(App.main()).toBe("Expresso: €1.99");
    });
})
