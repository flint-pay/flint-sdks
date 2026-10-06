import { d172 as c0, d549 as c1, d563 as c2, d564 as c3, d774 as c4, d545 as c5, d77 as c6, d1823 as c7, d1822 as c8, d73 as c9, d2157 as c10, d2158 as c11, d14 as c12, d74 as c13, d546 as c14, d547 as c15, d548 as c16, d1821 as c17, d75 as c18 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d563 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d563;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CardDetails"]:c0(),["Customer"]:c1(),["CustomerListResponse"]:c2(),["CustomerReceivableBalance"]:c3(),["DocumentTaxID"]:c4(),["ExpandedPaymentMethodSummary"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["PostalAddress"]:c9(),["ResponseMeta"]:c10(),["ResponseWarning"]:c11(),["SharedCodec1"]:c12(),["SharedCodec19"]:c13(),["SharedCodec203"]:c14(),["SharedCodec204"]:c15(),["SharedCodec205"]:c16(),["SharedCodec487"]:c17(),["TaxIdentity"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
