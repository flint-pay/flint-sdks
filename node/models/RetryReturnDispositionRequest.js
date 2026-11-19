import { d1781 as c0 } from '../descriptors/data/88.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1781 as d1781 } from '../descriptors/data/88.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1781;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RetryReturnDispositionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRetryReturnDispositionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
