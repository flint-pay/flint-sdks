import { d1762 as c0, d323 as c1, d1820 as c2, d1821 as c3, d2162 as c4, d2163 as c5, d2221 as c6, d2237 as c7, d2272 as c8, d2274 as c9, d2276 as c10, d14 as c11, d1819 as c12, d2235 as c13, d2236 as c14 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1762 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1762;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ListReturnPolicyRevisionsResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnPolicyRevision"]:c6(),["ReturnPolicyScope"]:c7(),["ReturnRestockingFeePolicy"]:c8(),["ReturnShippingPolicy"]:c9(),["ReturnWindow"]:c10(),["SharedCodec1"]:c11(),["SharedCodec466"]:c12(),["SharedCodec562"]:c13(),["SharedCodec563"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeListReturnPolicyRevisionsResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
