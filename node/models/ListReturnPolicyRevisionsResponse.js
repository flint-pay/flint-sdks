import { d1763 as c0, d77 as c1, d1823 as c2, d1822 as c3, d2157 as c4, d2158 as c5, d2216 as c6, d2232 as c7, d2268 as c8, d2270 as c9, d2271 as c10, d14 as c11, d1821 as c12, d2230 as c13, d2231 as c14 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1763 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1763;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ListReturnPolicyRevisionsResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnPolicyRevision"]:c6(),["ReturnPolicyScope"]:c7(),["ReturnRestockingFeePolicy"]:c8(),["ReturnShippingPolicy"]:c9(),["ReturnWindow"]:c10(),["SharedCodec1"]:c11(),["SharedCodec487"]:c12(),["SharedCodec585"]:c13(),["SharedCodec586"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeListReturnPolicyRevisionsResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
