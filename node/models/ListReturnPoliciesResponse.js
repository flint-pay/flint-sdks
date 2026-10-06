import { d1762 as c0, d77 as c1, d1823 as c2, d1822 as c3, d2157 as c4, d2158 as c5, d2218 as c6, d2216 as c7, d2232 as c8, d2268 as c9, d2270 as c10, d2271 as c11, d14 as c12, d1821 as c13, d2217 as c14, d2230 as c15, d2231 as c16 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1762 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1762;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ListReturnPoliciesResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnPolicy"]:c6(),["ReturnPolicyRevision"]:c7(),["ReturnPolicyScope"]:c8(),["ReturnRestockingFeePolicy"]:c9(),["ReturnShippingPolicy"]:c10(),["ReturnWindow"]:c11(),["SharedCodec1"]:c12(),["SharedCodec487"]:c13(),["SharedCodec577"]:c14(),["SharedCodec585"]:c15(),["SharedCodec586"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeListReturnPoliciesResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
