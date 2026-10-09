import { d132 as c0, d513 as c1, d528 as c2, d529 as c3, d747 as c4, d510 as c5, d323 as c6, d66 as c7, d67 as c8, d511 as c9, d512 as c10, d68 as c11 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d513 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d513;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CardDetails"]:c0(),["Customer"]:c1(),["CustomerReceivableBalance"]:c2(),["CustomerReceivables"]:c3(),["DocumentTaxID"]:c4(),["ExpandedPaymentMethodSummary"]:c5(),["MoneyValue"]:c6(),["PostalAddress"]:c7(),["SharedCodec14"]:c8(),["SharedCodec174"]:c9(),["SharedCodec175"]:c10(),["TaxIdentity"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomer(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
