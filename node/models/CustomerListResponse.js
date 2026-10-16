import { d132 as c0, d523 as c1, d537 as c2, d538 as c3, d539 as c4, d757 as c5, d520 as c6, d323 as c7, d1823 as c8, d1824 as c9, d66 as c10, d2178 as c11, d2179 as c12, d14 as c13, d67 as c14, d521 as c15, d522 as c16, d1822 as c17, d68 as c18 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d537 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d537;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CardDetails"]:c0(),["Customer"]:c1(),["CustomerListResponse"]:c2(),["CustomerReceivableBalance"]:c3(),["CustomerReceivables"]:c4(),["DocumentTaxID"]:c5(),["ExpandedPaymentMethodSummary"]:c6(),["MoneyValue"]:c7(),["NextAction"]:c8(),["NextActionMerchantAccountSession"]:c9(),["PostalAddress"]:c10(),["ResponseMeta"]:c11(),["ResponseWarning"]:c12(),["SharedCodec1"]:c13(),["SharedCodec14"]:c14(),["SharedCodec180"]:c15(),["SharedCodec181"]:c16(),["SharedCodec467"]:c17(),["TaxIdentity"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
