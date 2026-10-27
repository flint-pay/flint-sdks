import { d3970 as c0, d3971 as c1, d3972 as c2 } from '../descriptors/data/168.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2427 as c3 } from '../descriptors/data/96.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2427 as d2427 } from '../descriptors/data/96.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2427;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1168"]:c0(),["SharedCodec1169"]:c1(),["SharedCodec1170"]:c2(),["TransitionGiftCardRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTransitionGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
