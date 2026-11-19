import { d8538 as c0, d8541 as c1, d8542 as c2 } from '../descriptors/data/376.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8541 as d8541 } from '../descriptors/data/376.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8541;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryDistanceRequest"]:c0(),["DeliveryRadiusConditionRequest"]:c1(),["DeliveryRadiusOrigin"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRadiusConditionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
