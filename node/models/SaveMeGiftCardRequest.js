import { d1293 as c0 } from '../descriptors/data/61.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5745 as c1, d5746 as c2, d5747 as c3, d5748 as c4, d5749 as c5 } from '../descriptors/data/264.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1293 as d1293 } from '../descriptors/data/61.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1293;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SaveMeGiftCardRequest"]:c0(),["SharedCodec1244"]:c1(),["SharedCodec1245"]:c2(),["SharedCodec1246"]:c3(),["SharedCodec1247"]:c4(),["SharedCodec1248"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSaveMeGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
