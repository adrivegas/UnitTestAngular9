import { obtenerRobots } from "./arreglos";

describe('Pruebas de arreglos', () => {
    it('Debe retornar al menos 3 robots', () => {
        const res = obtenerRobots();
        expect(res.length).toBeGreaterThanOrEqual(3);
    });
    it('Debe existir Megan y Robit', () => {
        const res = obtenerRobots();
        expect(res).toContain('Megan');
        expect(res).toContain('Robit');
    });
})