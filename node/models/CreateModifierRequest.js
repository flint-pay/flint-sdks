import { d9766 as c0 } from '../descriptors/data/447.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8014 as c1 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c2 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9766 as d9766 } from '../descriptors/data/447.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9766;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateModifierRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateModifierRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
