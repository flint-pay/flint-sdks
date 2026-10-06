import { d168 as c0, d541 as c1, d557 as c2, d559 as c3, d765 as c4, d537 as c5, d77 as c6, d1797 as c7, d1796 as c8, d73 as c9, d2131 as c10, d2132 as c11, d14 as c12, d74 as c13, d538 as c14, d539 as c15, d540 as c16, d1795 as c17, d75 as c18 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d559 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d559;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CardDetails"]:c0(),["Customer"]:c1(),["CustomerReceivableBalance"]:c2(),["CustomerResponse"]:c3(),["DocumentTaxID"]:c4(),["ExpandedPaymentMethodSummary"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["PostalAddress"]:c9(),["ResponseMeta"]:c10(),["ResponseWarning"]:c11(),["SharedCodec1"]:c12(),["SharedCodec19"]:c13(),["SharedCodec202"]:c14(),["SharedCodec203"]:c15(),["SharedCodec204"]:c16(),["SharedCodec485"]:c17(),["TaxIdentity"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
