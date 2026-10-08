import { d132 as c0, d90 as c1, d323 as c2, d1820 as c3, d1821 as c4, d1989 as c5, d1994 as c6, d2162 as c7, d2163 as c8, d14 as c9, d91 as c10, d1819 as c11 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1994 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1994;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CardDetails"]:c0(),["ExpandedCustomerSummary"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["PaymentMethod"]:c5(),["PaymentMethodListResponse"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec16"]:c10(),["SharedCodec466"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentMethodListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
