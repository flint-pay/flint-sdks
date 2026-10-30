import { d151 as c0 } from '../descriptors/data/6.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6201 as c1, d6202 as c2, d6203 as c3, d6204 as c4 } from '../descriptors/data/287.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d151 as d151 } from '../descriptors/data/6.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d151;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmPaymentIntentRequest"]:c0(),["SharedCodec124"]:c1(),["SharedCodec125"]:c2(),["SharedCodec126"]:c3(),["SharedCodec127"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmPaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
