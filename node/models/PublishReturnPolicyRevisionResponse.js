import { d74 as c0, d1784 as c1, d1783 as c2, d2059 as c3, d2118 as c4, d2119 as c5, d2179 as c6, d2177 as c7, d2193 as c8, d2229 as c9, d2231 as c10, d2232 as c11, d2178 as c12, d2191 as c13, d2192 as c14, d2452 as c15 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2059 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2059;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PublishReturnPolicyRevisionResponse"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnPolicy"]:c6(),["ReturnPolicyRevision"]:c7(),["ReturnPolicyScope"]:c8(),["ReturnRestockingFeePolicy"]:c9(),["ReturnShippingPolicy"]:c10(),["ReturnWindow"]:c11(),["SharedCodec564"]:c12(),["SharedCodec572"]:c13(),["SharedCodec573"]:c14(),["UpdateReturnPolicyResponse"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
