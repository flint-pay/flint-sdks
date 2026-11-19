import { d149 as c0 } from '../descriptors/data/7.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d149 as d149 } from '../descriptors/data/7.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d149;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CancelReturnLineItemRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelReturnLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
