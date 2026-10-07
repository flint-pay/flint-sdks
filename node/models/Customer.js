import { d171 as c0, d549 as c1, d564 as c2, d774 as c3, d545 as c4, d77 as c5, d73 as c6, d74 as c7, d546 as c8, d547 as c9, d548 as c10, d75 as c11 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d549 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d549;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CardDetails"]:c0(),["Customer"]:c1(),["CustomerReceivableBalance"]:c2(),["DocumentTaxID"]:c3(),["ExpandedPaymentMethodSummary"]:c4(),["MoneyValue"]:c5(),["PostalAddress"]:c6(),["SharedCodec19"]:c7(),["SharedCodec203"]:c8(),["SharedCodec204"]:c9(),["SharedCodec205"]:c10(),["TaxIdentity"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomer(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
