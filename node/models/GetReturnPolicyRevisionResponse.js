import { d852 as c0, d74 as c1, d1784 as c2, d1783 as c3, d2119 as c4, d2120 as c5, d2178 as c6, d2194 as c7, d2230 as c8, d2232 as c9, d2233 as c10, d2192 as c11, d2193 as c12 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d852 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d852;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GetReturnPolicyRevisionResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnPolicyRevision"]:c6(),["ReturnPolicyScope"]:c7(),["ReturnRestockingFeePolicy"]:c8(),["ReturnShippingPolicy"]:c9(),["ReturnWindow"]:c10(),["SharedCodec572"]:c11(),["SharedCodec573"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGetReturnPolicyRevisionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
