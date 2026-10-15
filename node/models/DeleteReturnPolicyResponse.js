import { d556 as c0, d323 as c1, d1823 as c2, d1824 as c3, d2178 as c4, d2179 as c5, d2239 as c6, d2237 as c7, d2253 as c8, d2288 as c9, d2290 as c10, d2292 as c11, d14 as c12, d1822 as c13, d2238 as c14, d2251 as c15, d2252 as c16, d2548 as c17 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d556 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d556;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeleteReturnPolicyResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnPolicy"]:c6(),["ReturnPolicyRevision"]:c7(),["ReturnPolicyScope"]:c8(),["ReturnRestockingFeePolicy"]:c9(),["ReturnShippingPolicy"]:c10(),["ReturnWindow"]:c11(),["SharedCodec1"]:c12(),["SharedCodec467"]:c13(),["SharedCodec559"]:c14(),["SharedCodec567"]:c15(),["SharedCodec568"]:c16(),["UpdateReturnPolicyResponse"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeleteReturnPolicyResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
