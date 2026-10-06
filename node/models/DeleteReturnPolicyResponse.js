import { d573 as c0, d77 as c1, d1797 as c2, d1796 as c3, d2131 as c4, d2132 as c5, d2192 as c6, d2190 as c7, d2206 as c8, d2242 as c9, d2244 as c10, d2245 as c11, d14 as c12, d1795 as c13, d2191 as c14, d2204 as c15, d2205 as c16, d2467 as c17 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d573 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d573;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeleteReturnPolicyResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnPolicy"]:c6(),["ReturnPolicyRevision"]:c7(),["ReturnPolicyScope"]:c8(),["ReturnRestockingFeePolicy"]:c9(),["ReturnShippingPolicy"]:c10(),["ReturnWindow"]:c11(),["SharedCodec1"]:c12(),["SharedCodec485"]:c13(),["SharedCodec575"]:c14(),["SharedCodec583"]:c15(),["SharedCodec584"]:c16(),["UpdateReturnPolicyResponse"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeleteReturnPolicyResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
