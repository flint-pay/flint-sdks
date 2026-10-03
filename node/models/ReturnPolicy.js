import { d74 as c0, d2182 as c1, d2180 as c2, d2196 as c3, d2232 as c4, d2234 as c5, d2235 as c6, d2181 as c7, d2194 as c8, d2195 as c9 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2182 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2182;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicy"]:c1(),["ReturnPolicyRevision"]:c2(),["ReturnPolicyScope"]:c3(),["ReturnRestockingFeePolicy"]:c4(),["ReturnShippingPolicy"]:c5(),["ReturnWindow"]:c6(),["SharedCodec564"]:c7(),["SharedCodec572"]:c8(),["SharedCodec573"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
