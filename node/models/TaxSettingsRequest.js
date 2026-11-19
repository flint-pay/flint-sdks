import { d10788 as c0, d10789 as c1 } from '../descriptors/data/508.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7695 as c2 } from '../descriptors/data/323.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7695 as d7695 } from '../descriptors/data/323.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7695;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3033"]:c0(),["SharedCodec3034"]:c1(),["TaxSettingsRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
