import { d132 as c0, d523 as c1, d538 as c2, d539 as c3, d757 as c4, d520 as c5, d323 as c6, d66 as c7, d67 as c8, d521 as c9, d522 as c10, d68 as c11 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d523 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d523;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CardDetails"]:c0(),["Customer"]:c1(),["CustomerReceivableBalance"]:c2(),["CustomerReceivables"]:c3(),["DocumentTaxID"]:c4(),["ExpandedPaymentMethodSummary"]:c5(),["MoneyValue"]:c6(),["PostalAddress"]:c7(),["SharedCodec14"]:c8(),["SharedCodec180"]:c9(),["SharedCodec181"]:c10(),["TaxIdentity"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomer(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
