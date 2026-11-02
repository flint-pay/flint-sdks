import { d5112 as c0, d5113 as c5 } from '../descriptors/data/227.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d7005 as c1, d7006 as c2, d7007 as c3 } from '../descriptors/data/334.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4225 as c4 } from '../descriptors/data/177.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4225 as d4225 } from '../descriptors/data/177.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4225;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1366"]:c0(),["SharedCodec1461"]:c1(),["SharedCodec1462"]:c2(),["SharedCodec1463"]:c3(),["UpdateWebhookEndpointRequest"]:c4(),["WebhookSigningMethod"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
