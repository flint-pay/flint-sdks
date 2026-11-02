import { d5362 as c0 } from '../descriptors/data/241.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4140 as c1 } from '../descriptors/data/170.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4140 as d4140 } from '../descriptors/data/170.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4140;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1343"]:c0(),["TransitionGiftCardRequestWithoutReason"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTransitionGiftCardRequestWithoutReason(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
