import { d323 as c0, d1897 as c1, d1903 as c2, d1905 as c3, d66 as c4, d2420 as c5, d2421 as c6, d2422 as c7, d2427 as c8 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1897 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1897;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderTax"]:c1(),["OrderTaxExemption"]:c2(),["OrderTaxLocation"]:c3(),["PostalAddress"]:c4(),["SharedCodec600"]:c5(),["SharedCodec601"]:c6(),["TaxBreakdown"]:c7(),["TaxJurisdiction"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTax(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
