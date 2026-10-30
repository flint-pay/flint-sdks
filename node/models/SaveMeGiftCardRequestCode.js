import { d1294 as c0 } from '../descriptors/data/61.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5746 as c1, d5747 as c2 } from '../descriptors/data/264.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1294 as d1294 } from '../descriptors/data/61.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1294;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SaveMeGiftCardRequestCode"]:c0(),["SharedCodec1245"]:c1(),["SharedCodec1246"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSaveMeGiftCardRequestCode(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
