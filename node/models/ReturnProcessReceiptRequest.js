import { d1237 as c0 } from '../descriptors/data/58.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6676 as c1 } from '../descriptors/data/317.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6541 as c2, d6542 as c3, d6543 as c4 } from '../descriptors/data/308.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5419 as c5 } from '../descriptors/data/243.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1237 as d1237 } from '../descriptors/data/58.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1237;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnProcessReceiptRequest"]:c0(),["ReturnSourceSystemRequest"]:c1(),["SharedCodec1159"]:c2(),["SharedCodec1160"]:c3(),["SharedCodec1161"]:c4(),["SharedCodec231"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
