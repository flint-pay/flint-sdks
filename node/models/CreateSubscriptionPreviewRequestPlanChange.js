import { d424 as c0 } from '../descriptors/data/25.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8269 as c1, d8270 as c2 } from '../descriptors/data/365.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8282 as c3 } from '../descriptors/data/366.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d424 as d424 } from '../descriptors/data/25.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d424;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPreviewRequestPlanChange"]:c0(),["SharedCodec233"]:c1(),["SharedCodec234"]:c2(),["SubscriptionPlanChangeLineItemRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestPlanChange(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
