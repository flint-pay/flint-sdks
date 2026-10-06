import { d77 as c0, d1823 as c1, d1822 as c2, d2157 as c3, d2158 as c4, d2218 as c5, d2216 as c6, d2232 as c7, d2268 as c8, d2270 as c9, d2271 as c10, d14 as c11, d1821 as c12, d2217 as c13, d2230 as c14, d2231 as c15, d2493 as c16 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2493 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2493;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["ReturnPolicy"]:c5(),["ReturnPolicyRevision"]:c6(),["ReturnPolicyScope"]:c7(),["ReturnRestockingFeePolicy"]:c8(),["ReturnShippingPolicy"]:c9(),["ReturnWindow"]:c10(),["SharedCodec1"]:c11(),["SharedCodec487"]:c12(),["SharedCodec577"]:c13(),["SharedCodec585"]:c14(),["SharedCodec586"]:c15(),["UpdateReturnPolicyResponse"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnPolicyResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
