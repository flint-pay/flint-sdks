import { d8813 as c0, d8814 as c5 } from '../descriptors/data/394.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d11123 as c1, d11124 as c2, d11125 as c3 } from '../descriptors/data/530.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7829 as c4 } from '../descriptors/data/332.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7829 as d7829 } from '../descriptors/data/332.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7829;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3098"]:c0(),["SharedCodec3226"]:c1(),["SharedCodec3227"]:c2(),["SharedCodec3228"]:c3(),["UpdateWebhookEndpointRequest"]:c4(),["WebhookSigningMethod"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
