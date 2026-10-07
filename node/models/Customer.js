import { d176 as c0, d550 as c1, d565 as c2, d780 as c3, d546 as c4, d77 as c5, d73 as c6, d74 as c7, d547 as c8, d548 as c9, d549 as c10, d75 as c11 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d550 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d550;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CardDetails"]:c0(),["Customer"]:c1(),["CustomerReceivableBalance"]:c2(),["DocumentTaxID"]:c3(),["ExpandedPaymentMethodSummary"]:c4(),["MoneyValue"]:c5(),["PostalAddress"]:c6(),["SharedCodec19"]:c7(),["SharedCodec203"]:c8(),["SharedCodec204"]:c9(),["SharedCodec205"]:c10(),["TaxIdentity"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomer(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
