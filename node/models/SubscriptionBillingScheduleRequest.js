import { d11006 as c0 } from '../descriptors/data/524.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d11006 as d11006 } from '../descriptors/data/524.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d11006;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionBillingScheduleRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionBillingScheduleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
