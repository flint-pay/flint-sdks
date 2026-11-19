import { d8767 as c0, d8768 as c5 } from '../descriptors/data/388.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d11055 as c1, d11056 as c2, d11057 as c3 } from '../descriptors/data/523.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7808 as c4 } from '../descriptors/data/331.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7808 as d7808 } from '../descriptors/data/331.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7808;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3089"]:c0(),["SharedCodec3210"]:c1(),["SharedCodec3211"]:c2(),["SharedCodec3212"]:c3(),["UpdateWebhookEndpointRequest"]:c4(),["WebhookSigningMethod"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
