import { d4399 as c0 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4511 as c1 } from '../descriptors/data/193.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4192 as c2 } from '../descriptors/data/175.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4192 as d4192 } from '../descriptors/data/175.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4192;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1350"]:c0(),["SharedCodec1353"]:c1(),["UpdatePromotionCodeRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionCodeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
