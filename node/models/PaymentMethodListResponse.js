import { d132 as c0, d90 as c1, d323 as c2, d1823 as c3, d1824 as c4, d2006 as c5, d2011 as c6, d2178 as c7, d2179 as c8, d14 as c9, d91 as c10, d1822 as c11 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2011 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2011;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CardDetails"]:c0(),["ExpandedCustomerSummary"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["PaymentMethod"]:c5(),["PaymentMethodListResponse"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec16"]:c10(),["SharedCodec467"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentMethodListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
