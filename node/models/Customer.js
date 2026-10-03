import { d165 as c0, d534 as c1, d550 as c2, d757 as c3, d157 as c4, d74 as c5, d70 as c6, d71 as c7, d532 as c8, d533 as c9, d158 as c10, d72 as c11 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d534 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d534;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CardDetails"]:c0(),["Customer"]:c1(),["CustomerReceivableBalance"]:c2(),["DocumentTaxID"]:c3(),["ExpandedPaymentMethodSummary"]:c4(),["MoneyValue"]:c5(),["PostalAddress"]:c6(),["SharedCodec18"]:c7(),["SharedCodec200"]:c8(),["SharedCodec201"]:c9(),["SharedCodec45"]:c10(),["TaxIdentity"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomer(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
