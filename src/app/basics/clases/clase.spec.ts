import { Jugador } from './clase';
import { from } from 'rxjs';
describe('Pruebas de clase', () => {

    let jugador = new Jugador();

    beforeEach(() => {
        jugador = new Jugador();
    })
   
    it('Debe retornar 80 de hp, si recibe 20 de daño', () => {
        const resp = jugador.recibeDanio(20);

        expect(resp).toBe(80);
    })
    it('Debe retornar 50 de hp, si recibe 50 de daño', () => {
        const jugador = new Jugador();
        const resp = jugador.recibeDanio(50);

        expect(resp).toBe(50);
    })
})