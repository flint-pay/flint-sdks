import { d167 as c0, d536 as c1, d552 as c2, d554 as c3, d759 as c4, d159 as c5, d74 as c6, d1786 as c7, d1785 as c8, d70 as c9, d2121 as c10, d2122 as c11, d71 as c12, d534 as c13, d535 as c14, d160 as c15, d72 as c16 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d554 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d554;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CardDetails"]:c0(),["Customer"]:c1(),["CustomerReceivableBalance"]:c2(),["CustomerResponse"]:c3(),["DocumentTaxID"]:c4(),["ExpandedPaymentMethodSummary"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["PostalAddress"]:c9(),["ResponseMeta"]:c10(),["ResponseWarning"]:c11(),["SharedCodec18"]:c12(),["SharedCodec200"]:c13(),["SharedCodec201"]:c14(),["SharedCodec45"]:c15(),["TaxIdentity"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
