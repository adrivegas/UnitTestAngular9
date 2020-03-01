import { mensaje } from "./string"

describe ('Pruebas de string', () => {
    it('Debe retornar un string', () => {
        const resp = mensaje('Adriana');
        expect(typeof resp).toBe('string');
    })
})