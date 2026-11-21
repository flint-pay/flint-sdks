import { d414 as c0 } from '../descriptors/data/25.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d11050 as c1, d11051 as c2 } from '../descriptors/data/526.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d414 as d414 } from '../descriptors/data/25.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d414;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionLineItemRequest"]:c0(),["SharedCodec584"]:c1(),["SharedCodec585"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
