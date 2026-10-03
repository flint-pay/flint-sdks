import { d566 as c0, d74 as c1, d1784 as c2, d1783 as c3, d2119 as c4, d2120 as c5, d2180 as c6, d2178 as c7, d2194 as c8, d2230 as c9, d2232 as c10, d2233 as c11, d2179 as c12, d2192 as c13, d2193 as c14, d2453 as c15 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d566 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d566;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeleteReturnPolicyResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnPolicy"]:c6(),["ReturnPolicyRevision"]:c7(),["ReturnPolicyScope"]:c8(),["ReturnRestockingFeePolicy"]:c9(),["ReturnShippingPolicy"]:c10(),["ReturnWindow"]:c11(),["SharedCodec564"]:c12(),["SharedCodec572"]:c13(),["SharedCodec573"]:c14(),["UpdateReturnPolicyResponse"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeleteReturnPolicyResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
