import { d132 as c0, d513 as c1, d527 as c2, d528 as c3, d529 as c4, d747 as c5, d510 as c6, d323 as c7, d1820 as c8, d1821 as c9, d66 as c10, d2162 as c11, d2163 as c12, d14 as c13, d67 as c14, d511 as c15, d512 as c16, d1819 as c17, d68 as c18 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d527 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d527;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CardDetails"]:c0(),["Customer"]:c1(),["CustomerListResponse"]:c2(),["CustomerReceivableBalance"]:c3(),["CustomerReceivables"]:c4(),["DocumentTaxID"]:c5(),["ExpandedPaymentMethodSummary"]:c6(),["MoneyValue"]:c7(),["NextAction"]:c8(),["NextActionMerchantAccountSession"]:c9(),["PostalAddress"]:c10(),["ResponseMeta"]:c11(),["ResponseWarning"]:c12(),["SharedCodec1"]:c13(),["SharedCodec14"]:c14(),["SharedCodec174"]:c15(),["SharedCodec175"]:c16(),["SharedCodec466"]:c17(),["TaxIdentity"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
