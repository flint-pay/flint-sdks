import { d131 as c0, d492 as c1, d506 as c2, d507 as c3, d508 as c4, d726 as c5, d489 as c6, d314 as c7, d1775 as c8, d1776 as c9, d66 as c10, d2112 as c11, d2113 as c12, d14 as c13, d67 as c14, d490 as c15, d491 as c16, d1774 as c17, d68 as c18 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d506 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d506;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CardDetails"]:c0(),["Customer"]:c1(),["CustomerListResponse"]:c2(),["CustomerReceivableBalance"]:c3(),["CustomerReceivables"]:c4(),["DocumentTaxID"]:c5(),["ExpandedPaymentMethodSummary"]:c6(),["MoneyValue"]:c7(),["NextAction"]:c8(),["NextActionMerchantAccountSession"]:c9(),["PostalAddress"]:c10(),["ResponseMeta"]:c11(),["ResponseWarning"]:c12(),["SharedCodec1"]:c13(),["SharedCodec14"]:c14(),["SharedCodec165"]:c15(),["SharedCodec166"]:c16(),["SharedCodec448"]:c17(),["TaxIdentity"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
