import { d323 as c0, d2420 as c1, d2421 as c2, d2422 as c3, d2427 as c4 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2422 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2422;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SharedCodec600"]:c1(),["SharedCodec601"]:c2(),["TaxBreakdown"]:c3(),["TaxJurisdiction"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxBreakdown(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
