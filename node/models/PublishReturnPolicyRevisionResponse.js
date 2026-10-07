import { d314 as c0, d1775 as c1, d1776 as c2, d2052 as c3, d2112 as c4, d2113 as c5, d2173 as c6, d2171 as c7, d2187 as c8, d2222 as c9, d2224 as c10, d2226 as c11, d14 as c12, d1774 as c13, d2172 as c14, d2185 as c15, d2186 as c16, d2445 as c17 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2052 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2052;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PublishReturnPolicyRevisionResponse"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnPolicy"]:c6(),["ReturnPolicyRevision"]:c7(),["ReturnPolicyScope"]:c8(),["ReturnRestockingFeePolicy"]:c9(),["ReturnShippingPolicy"]:c10(),["ReturnWindow"]:c11(),["SharedCodec1"]:c12(),["SharedCodec448"]:c13(),["SharedCodec534"]:c14(),["SharedCodec542"]:c15(),["SharedCodec543"]:c16(),["UpdateReturnPolicyResponse"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
