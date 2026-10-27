import { d3970 as c0, d3971 as c1, d3972 as c2 } from '../descriptors/data/168.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d2427 as c3 } from '../descriptors/data/96.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d2427 as d2427 } from '../descriptors/data/96.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2427;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1168"]:c0(),["SharedCodec1169"]:c1(),["SharedCodec1170"]:c2(),["TransitionGiftCardRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTransitionGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
