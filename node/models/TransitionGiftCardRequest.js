import { d5360 as c0, d5361 as c1, d5362 as c2 } from '../descriptors/data/241.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4138 as c3 } from '../descriptors/data/170.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4138 as d4138 } from '../descriptors/data/170.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4138;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1341"]:c0(),["SharedCodec1342"]:c1(),["SharedCodec1343"]:c2(),["TransitionGiftCardRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTransitionGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
