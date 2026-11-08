import { d6430 as c0, d6431 as c5 } from '../descriptors/data/289.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8423 as c1, d8424 as c2, d8425 as c3 } from '../descriptors/data/406.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5497 as c4 } from '../descriptors/data/238.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5497 as d5497 } from '../descriptors/data/238.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5497;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1580"]:c0(),["SharedCodec1686"]:c1(),["SharedCodec1687"]:c2(),["SharedCodec1688"]:c3(),["UpdateWebhookEndpointRequest"]:c4(),["WebhookSigningMethod"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
