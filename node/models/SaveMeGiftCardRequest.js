import { d1895 as c0 } from '../descriptors/data/95.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9497 as c1, d9498 as c2, d9499 as c3 } from '../descriptors/data/432.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9500 as c4, d9501 as c5 } from '../descriptors/data/433.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1895 as d1895 } from '../descriptors/data/95.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1895;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SaveMeGiftCardRequest"]:c0(),["SharedCodec2816"]:c1(),["SharedCodec2817"]:c2(),["SharedCodec2818"]:c3(),["SharedCodec2819"]:c4(),["SharedCodec2820"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSaveMeGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
