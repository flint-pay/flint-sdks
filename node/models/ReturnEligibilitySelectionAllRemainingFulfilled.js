import { d5868 as c0, d5872 as c2 } from '../descriptors/data/269.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d1220 as c1 } from '../descriptors/data/57.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d1220 as d1220 } from '../descriptors/data/57.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1220;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnEligibilityLineItemRequest"]:c0(),["ReturnEligibilitySelectionAllRemainingFulfilled"]:c1(),["SharedCodec1154"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilitySelectionAllRemainingFulfilled(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
