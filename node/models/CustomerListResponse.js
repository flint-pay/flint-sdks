import { d165 as c0, d534 as c1, d549 as c2, d550 as c3, d757 as c4, d157 as c5, d74 as c6, d1784 as c7, d1783 as c8, d70 as c9, d2118 as c10, d2119 as c11, d71 as c12, d532 as c13, d533 as c14, d158 as c15, d72 as c16 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d549 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d549;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CardDetails"]:c0(),["Customer"]:c1(),["CustomerListResponse"]:c2(),["CustomerReceivableBalance"]:c3(),["DocumentTaxID"]:c4(),["ExpandedPaymentMethodSummary"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["PostalAddress"]:c9(),["ResponseMeta"]:c10(),["ResponseWarning"]:c11(),["SharedCodec18"]:c12(),["SharedCodec200"]:c13(),["SharedCodec201"]:c14(),["SharedCodec45"]:c15(),["TaxIdentity"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
