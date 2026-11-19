import { d8546 as c0 } from '../descriptors/data/376.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8546 as d8546 } from '../descriptors/data/376.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8546;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryBlackoutIntervalRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryBlackoutIntervalRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
