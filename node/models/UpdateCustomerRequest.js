import { d4831 as c0, d4832 as c6, d4833 as c7 } from '../descriptors/data/212.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4508 as c1, d4509 as c2 } from '../descriptors/data/193.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4400 as c3, d4401 as c4, d4399 as c5 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4807 as c8, d4808 as c9 } from '../descriptors/data/210.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4809 as c10, d4821 as c11, d4822 as c12 } from '../descriptors/data/211.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4149 as c13 } from '../descriptors/data/171.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4149 as d4149 } from '../descriptors/data/171.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4149;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DocumentTaxIDRequest"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2(),["SharedCodec1348"]:c3(),["SharedCodec1349"]:c4(),["SharedCodec1350"]:c5(),["SharedCodec1355"]:c6(),["SharedCodec1356"]:c7(),["SharedCodec1357"]:c8(),["SharedCodec1358"]:c9(),["SharedCodec1359"]:c10(),["SharedCodec841"]:c11(),["SharedCodec842"]:c12(),["UpdateCustomerRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
