import { d471 as c0, d74 as c1, d1786 as c2, d1785 as c3, d2121 as c4, d2122 as c5, d2182 as c6, d2180 as c7, d2196 as c8, d2232 as c9, d2234 as c10, d2235 as c11, d2181 as c12, d2194 as c13, d2195 as c14, d2455 as c15 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d471 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d471;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnPolicyResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnPolicy"]:c6(),["ReturnPolicyRevision"]:c7(),["ReturnPolicyScope"]:c8(),["ReturnRestockingFeePolicy"]:c9(),["ReturnShippingPolicy"]:c10(),["ReturnWindow"]:c11(),["SharedCodec564"]:c12(),["SharedCodec572"]:c13(),["SharedCodec573"]:c14(),["UpdateReturnPolicyResponse"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPolicyResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
