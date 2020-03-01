import { mensaje } from "./string"

describe ('Pruebas de string', () => {
    it('Debe retornar un string', () => {
        const resp = mensaje('Adriana');
        expect(typeof resp).toBe('string');
    })
    it('Debe retornar un saludo con el nombre enviado', () => {
        const nombre = 'Adriana';
        const resp = mensaje(nombre);
        expect(resp).toContain(nombre);
    })
})