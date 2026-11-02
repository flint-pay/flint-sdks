import { d5360 as c0, d5361 as c1, d5362 as c2 } from '../descriptors/data/241.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4138 as c3 } from '../descriptors/data/170.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4138 as d4138 } from '../descriptors/data/170.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4138;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1341"]:c0(),["SharedCodec1342"]:c1(),["SharedCodec1343"]:c2(),["TransitionGiftCardRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTransitionGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
