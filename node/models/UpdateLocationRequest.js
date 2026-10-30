import { d4510 as c0, d4508 as c1, d4509 as c2, d4511 as c4 } from '../descriptors/data/193.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4399 as c3 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5672 as c5, d5673 as c6, d5674 as c7, d5675 as c8 } from '../descriptors/data/256.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4169 as c9 } from '../descriptors/data/173.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4169 as d4169 } from '../descriptors/data/173.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4169;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2(),["SharedCodec1350"]:c3(),["SharedCodec1353"]:c4(),["SharedCodec1390"]:c5(),["SharedCodec1391"]:c6(),["SharedCodec1392"]:c7(),["SharedCodec1393"]:c8(),["UpdateLocationRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
