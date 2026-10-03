import { d38 as c0, d2327 as c1, d2328 as c2, d2329 as c3, d2330 as c4 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2330 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2330;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec5"]:c0(),["SharedCodec603"]:c1(),["SharedCodec604"]:c2(),["SharedCodec605"]:c3(),["TaxBreakdown"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxBreakdown(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
