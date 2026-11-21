import { d8269 as c0, d8270 as c1 } from '../descriptors/data/365.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8282 as c2 } from '../descriptors/data/366.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7649 as c3 } from '../descriptors/data/320.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7649 as d7649 } from '../descriptors/data/320.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7649;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec233"]:c0(),["SharedCodec234"]:c1(),["SubscriptionPlanChangeLineItemRequest"]:c2(),["SubscriptionPlanTermsRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanTermsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
