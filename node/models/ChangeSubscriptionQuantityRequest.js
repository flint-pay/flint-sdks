import { d176 as c0 } from '../descriptors/data/8.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9748 as c1 } from '../descriptors/data/450.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d176 as d176 } from '../descriptors/data/8.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d176;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ChangeSubscriptionQuantityRequest"]:c0(),["SubscriptionQuantityChangeLineItemRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeChangeSubscriptionQuantityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
