import { d479 as c0, d77 as c1, d1823 as c2, d1822 as c3, d2157 as c4, d2158 as c5, d2218 as c6, d2216 as c7, d2232 as c8, d2268 as c9, d2270 as c10, d2271 as c11, d14 as c12, d1821 as c13, d2217 as c14, d2230 as c15, d2231 as c16, d2493 as c17 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d479 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d479;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnPolicyResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnPolicy"]:c6(),["ReturnPolicyRevision"]:c7(),["ReturnPolicyScope"]:c8(),["ReturnRestockingFeePolicy"]:c9(),["ReturnShippingPolicy"]:c10(),["ReturnWindow"]:c11(),["SharedCodec1"]:c12(),["SharedCodec487"]:c13(),["SharedCodec577"]:c14(),["SharedCodec585"]:c15(),["SharedCodec586"]:c16(),["UpdateReturnPolicyResponse"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPolicyResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
