import { d1709 as c0 } from '../descriptors/data/85.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1709 as d1709 } from '../descriptors/data/85.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1709;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReceiptSettingsPatch"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReceiptSettingsPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
