import { d5362 as c0 } from '../descriptors/data/241.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4140 as c1 } from '../descriptors/data/170.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4140 as d4140 } from '../descriptors/data/170.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4140;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1343"]:c0(),["TransitionGiftCardRequestWithoutReason"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTransitionGiftCardRequestWithoutReason(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
