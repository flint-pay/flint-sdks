import { d6676 as c0 } from '../descriptors/data/317.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6541 as c1, d6542 as c2, d6543 as c3 } from '../descriptors/data/308.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5419 as c4 } from '../descriptors/data/243.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6676 as d6676 } from '../descriptors/data/317.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6676;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnSourceSystemRequest"]:c0(),["SharedCodec1159"]:c1(),["SharedCodec1160"]:c2(),["SharedCodec1161"]:c3(),["SharedCodec231"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnSourceSystemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
