import { d4510 as c0, d4508 as c1, d4509 as c2, d4511 as c4 } from '../descriptors/data/193.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4399 as c3 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5239 as c5, d5240 as c6, d5241 as c7, d5242 as c8, d5243 as c9, d5244 as c10 } from '../descriptors/data/234.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5245 as c11, d5246 as c12, d5247 as c13, d5248 as c14 } from '../descriptors/data/235.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4821 as c15, d4822 as c16 } from '../descriptors/data/211.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4158 as c17 } from '../descriptors/data/172.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4158 as d4158 } from '../descriptors/data/172.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4158;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2(),["SharedCodec1350"]:c3(),["SharedCodec1353"]:c4(),["SharedCodec1368"]:c5(),["SharedCodec1369"]:c6(),["SharedCodec1370"]:c7(),["SharedCodec1371"]:c8(),["SharedCodec1372"]:c9(),["SharedCodec1373"]:c10(),["SharedCodec1374"]:c11(),["SharedCodec1375"]:c12(),["SharedCodec1376"]:c13(),["SharedCodec1377"]:c14(),["SharedCodec841"]:c15(),["SharedCodec842"]:c16(),["UpdateFulfillmentRequest"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
