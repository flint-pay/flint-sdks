import { d74 as c0, d1784 as c1, d1783 as c2, d2118 as c3, d2119 as c4, d2179 as c5, d2177 as c6, d2193 as c7, d2229 as c8, d2231 as c9, d2232 as c10, d2178 as c11, d2191 as c12, d2192 as c13, d2452 as c14 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2452 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2452;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["ReturnPolicy"]:c5(),["ReturnPolicyRevision"]:c6(),["ReturnPolicyScope"]:c7(),["ReturnRestockingFeePolicy"]:c8(),["ReturnShippingPolicy"]:c9(),["ReturnWindow"]:c10(),["SharedCodec564"]:c11(),["SharedCodec572"]:c12(),["SharedCodec573"]:c13(),["UpdateReturnPolicyResponse"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnPolicyResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
