import { d77 as c0, d1830 as c1, d1829 as c2, d2105 as c3, d2164 as c4, d2165 as c5, d2225 as c6, d2223 as c7, d2239 as c8, d2275 as c9, d2277 as c10, d2278 as c11, d14 as c12, d1828 as c13, d2224 as c14, d2237 as c15, d2238 as c16, d2500 as c17 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2105 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2105;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PublishReturnPolicyRevisionResponse"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnPolicy"]:c6(),["ReturnPolicyRevision"]:c7(),["ReturnPolicyScope"]:c8(),["ReturnRestockingFeePolicy"]:c9(),["ReturnShippingPolicy"]:c10(),["ReturnWindow"]:c11(),["SharedCodec1"]:c12(),["SharedCodec492"]:c13(),["SharedCodec582"]:c14(),["SharedCodec590"]:c15(),["SharedCodec591"]:c16(),["UpdateReturnPolicyResponse"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
