import { d479 as c0, d77 as c1, d1824 as c2, d1823 as c3, d2158 as c4, d2159 as c5, d2219 as c6, d2217 as c7, d2233 as c8, d2269 as c9, d2271 as c10, d2272 as c11, d14 as c12, d1822 as c13, d2218 as c14, d2231 as c15, d2232 as c16, d2494 as c17 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d479 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d479;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnPolicyResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnPolicy"]:c6(),["ReturnPolicyRevision"]:c7(),["ReturnPolicyScope"]:c8(),["ReturnRestockingFeePolicy"]:c9(),["ReturnShippingPolicy"]:c10(),["ReturnWindow"]:c11(),["SharedCodec1"]:c12(),["SharedCodec488"]:c13(),["SharedCodec578"]:c14(),["SharedCodec586"]:c15(),["SharedCodec587"]:c16(),["UpdateReturnPolicyResponse"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPolicyResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
