import { d2428 as c0 } from '../descriptors/data/96.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2428 as d2428 } from '../descriptors/data/96.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2428;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["TransitionGiftCardRequestFreeze"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTransitionGiftCardRequestFreeze(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
