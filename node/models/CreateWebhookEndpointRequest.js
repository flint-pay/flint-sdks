import { d330 as c0 } from '../descriptors/data/19.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d7017 as c1, d7018 as c2 } from '../descriptors/data/335.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5113 as c3 } from '../descriptors/data/227.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d330 as d330 } from '../descriptors/data/19.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d330;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateWebhookEndpointRequest"]:c0(),["SharedCodec333"]:c1(),["SharedCodec334"]:c2(),["WebhookSigningMethod"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
