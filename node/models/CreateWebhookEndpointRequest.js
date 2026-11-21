import { d432 as c0 } from '../descriptors/data/26.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d11138 as c1, d11139 as c2 } from '../descriptors/data/531.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8814 as c3 } from '../descriptors/data/394.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d432 as d432 } from '../descriptors/data/26.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d432;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateWebhookEndpointRequest"]:c0(),["SharedCodec604"]:c1(),["SharedCodec605"]:c2(),["WebhookSigningMethod"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
