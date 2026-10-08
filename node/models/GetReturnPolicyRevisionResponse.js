import { d840 as c0, d323 as c1, d1820 as c2, d1821 as c3, d2162 as c4, d2163 as c5, d2221 as c6, d2237 as c7, d2272 as c8, d2274 as c9, d2276 as c10, d14 as c11, d1819 as c12, d2235 as c13, d2236 as c14 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d840 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d840;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GetReturnPolicyRevisionResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnPolicyRevision"]:c6(),["ReturnPolicyScope"]:c7(),["ReturnRestockingFeePolicy"]:c8(),["ReturnShippingPolicy"]:c9(),["ReturnWindow"]:c10(),["SharedCodec1"]:c11(),["SharedCodec466"]:c12(),["SharedCodec562"]:c13(),["SharedCodec563"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGetReturnPolicyRevisionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
