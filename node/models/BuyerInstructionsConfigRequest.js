import { d8449 as c0 } from '../descriptors/data/371.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8449 as d8449 } from '../descriptors/data/371.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8449;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerInstructionsConfigRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerInstructionsConfigRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
