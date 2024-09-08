// index.js o index.mjs
import { nanoid } from 'nanoid'; // Cambiado a import
import { procesarTexto } from './utils.js'; // Asegúrate de usar la extensión .js o .mjs según corresponda

// Generar dos IDs diferentes
const id1 = nanoid();
const id2 = nanoid();

console.log(`ID 1: ${id1}`);
console.log(`ID 2: ${id2}`);

// Llamar a la función procesarTexto con los IDs generados
const resultado = procesarTexto(id1, id2);
console.log('Resultado:', resultado);
