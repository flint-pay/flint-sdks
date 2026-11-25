import { d8893 as c0, d8894 as c5 } from '../descriptors/data/398.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d11253 as c1, d11254 as c2, d11255 as c3 } from '../descriptors/data/538.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7904 as c4 } from '../descriptors/data/336.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7904 as d7904 } from '../descriptors/data/336.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7904;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3145"]:c0(),["SharedCodec3275"]:c1(),["SharedCodec3276"]:c2(),["SharedCodec3277"]:c3(),["UpdateWebhookEndpointRequest"]:c4(),["WebhookSigningMethod"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
