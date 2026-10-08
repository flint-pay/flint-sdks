import { d323 as c0, d1890 as c1, d1896 as c2, d1898 as c3, d66 as c4, d2404 as c5, d2405 as c6, d2406 as c7, d2411 as c8 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1890 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1890;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderTax"]:c1(),["OrderTaxExemption"]:c2(),["OrderTaxLocation"]:c3(),["PostalAddress"]:c4(),["SharedCodec595"]:c5(),["SharedCodec596"]:c6(),["TaxBreakdown"]:c7(),["TaxJurisdiction"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTax(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
