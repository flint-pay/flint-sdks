import { d1765 as c0, d323 as c1, d1823 as c2, d1824 as c3, d2178 as c4, d2179 as c5, d2237 as c6, d2253 as c7, d2288 as c8, d2290 as c9, d2292 as c10, d14 as c11, d1822 as c12, d2251 as c13, d2252 as c14 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1765 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1765;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ListReturnPolicyRevisionsResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnPolicyRevision"]:c6(),["ReturnPolicyScope"]:c7(),["ReturnRestockingFeePolicy"]:c8(),["ReturnShippingPolicy"]:c9(),["ReturnWindow"]:c10(),["SharedCodec1"]:c11(),["SharedCodec467"]:c12(),["SharedCodec567"]:c13(),["SharedCodec568"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeListReturnPolicyRevisionsResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
