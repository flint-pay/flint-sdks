import { d122 as c0 } from '../descriptors/data/5.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4646 as c1, d4647 as c2 } from '../descriptors/data/200.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4084 as c3 } from '../descriptors/data/167.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d122 as d122 } from '../descriptors/data/5.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d122;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ChangeSubscriptionPlanRequest"]:c0(),["SharedCodec101"]:c1(),["SharedCodec102"]:c2(),["SubscriptionPlanChangeLineItemRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeChangeSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
