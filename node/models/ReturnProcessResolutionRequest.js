import { d74 as c0, d2201 as c1, d2220 as c2, d1938 as c3, d2215 as c4, d2214 as c5, d2217 as c6, d2216 as c7, d2218 as c8 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2201 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2201;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnProcessResolutionRequest"]:c1(),["ReturnReplacementLineItemRequest"]:c2(),["SharedCodec504"]:c3(),["SharedCodec579"]:c4(),["SharedCodec580"]:c5(),["SharedCodec581"]:c6(),["SharedCodec582"]:c7(),["SharedCodec583"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
