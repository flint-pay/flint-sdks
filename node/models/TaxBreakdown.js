import { d38 as c0, d2328 as c1, d2329 as c2, d2330 as c3, d2331 as c4 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2331 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2331;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec5"]:c0(),["SharedCodec603"]:c1(),["SharedCodec604"]:c2(),["SharedCodec605"]:c3(),["TaxBreakdown"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxBreakdown(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
