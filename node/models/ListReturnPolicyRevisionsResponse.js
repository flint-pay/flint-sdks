import { d1730 as c0, d74 as c1, d1784 as c2, d1783 as c3, d2118 as c4, d2119 as c5, d2177 as c6, d2193 as c7, d2229 as c8, d2231 as c9, d2232 as c10, d2191 as c11, d2192 as c12 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1730 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1730;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ListReturnPolicyRevisionsResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnPolicyRevision"]:c6(),["ReturnPolicyScope"]:c7(),["ReturnRestockingFeePolicy"]:c8(),["ReturnShippingPolicy"]:c9(),["ReturnWindow"]:c10(),["SharedCodec572"]:c11(),["SharedCodec573"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeListReturnPolicyRevisionsResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
