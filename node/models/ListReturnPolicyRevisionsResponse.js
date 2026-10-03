import { d1732 as c0, d74 as c1, d1786 as c2, d1785 as c3, d2121 as c4, d2122 as c5, d2180 as c6, d2196 as c7, d2232 as c8, d2234 as c9, d2235 as c10, d2194 as c11, d2195 as c12 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1732 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1732;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ListReturnPolicyRevisionsResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnPolicyRevision"]:c6(),["ReturnPolicyScope"]:c7(),["ReturnRestockingFeePolicy"]:c8(),["ReturnShippingPolicy"]:c9(),["ReturnWindow"]:c10(),["SharedCodec572"]:c11(),["SharedCodec573"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeListReturnPolicyRevisionsResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
