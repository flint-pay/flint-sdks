import { d984 as c0 } from '../descriptors/data/46.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6138 as c1, d6139 as c2, d6140 as c3, d6141 as c4, d6142 as c5, d6143 as c6, d6144 as c7, d6145 as c8 } from '../descriptors/data/284.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d984 as d984 } from '../descriptors/data/46.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d984;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PackageTransitionRequest"]:c0(),["SharedCodec925"]:c1(),["SharedCodec926"]:c2(),["SharedCodec927"]:c3(),["SharedCodec928"]:c4(),["SharedCodec929"]:c5(),["SharedCodec930"]:c6(),["SharedCodec931"]:c7(),["SharedCodec932"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
