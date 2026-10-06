import { d41 as c0, d2368 as c1, d2369 as c2, d2370 as c3, d2371 as c4 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d2371 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2371;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec6"]:c0(),["SharedCodec617"]:c1(),["SharedCodec618"]:c2(),["SharedCodec619"]:c3(),["TaxBreakdown"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxBreakdown(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
