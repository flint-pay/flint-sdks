import { d74 as c0, d1786 as c1, d1785 as c2, d2121 as c3, d2122 as c4, d2182 as c5, d2180 as c6, d2196 as c7, d2232 as c8, d2234 as c9, d2235 as c10, d2181 as c11, d2194 as c12, d2195 as c13, d2455 as c14 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2455 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2455;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["ReturnPolicy"]:c5(),["ReturnPolicyRevision"]:c6(),["ReturnPolicyScope"]:c7(),["ReturnRestockingFeePolicy"]:c8(),["ReturnShippingPolicy"]:c9(),["ReturnWindow"]:c10(),["SharedCodec564"]:c11(),["SharedCodec572"]:c12(),["SharedCodec573"]:c13(),["UpdateReturnPolicyResponse"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnPolicyResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
