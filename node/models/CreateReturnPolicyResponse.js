import { d433 as c0, d323 as c1, d1820 as c2, d1821 as c3, d2162 as c4, d2163 as c5, d2223 as c6, d2221 as c7, d2237 as c8, d2272 as c9, d2274 as c10, d2276 as c11, d14 as c12, d1819 as c13, d2222 as c14, d2235 as c15, d2236 as c16, d2532 as c17 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d433 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d433;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnPolicyResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnPolicy"]:c6(),["ReturnPolicyRevision"]:c7(),["ReturnPolicyScope"]:c8(),["ReturnRestockingFeePolicy"]:c9(),["ReturnShippingPolicy"]:c10(),["ReturnWindow"]:c11(),["SharedCodec1"]:c12(),["SharedCodec466"]:c13(),["SharedCodec554"]:c14(),["SharedCodec562"]:c15(),["SharedCodec563"]:c16(),["UpdateReturnPolicyResponse"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPolicyResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
