import { d510 as c0, d909 as c1, d74 as c2, d407 as c3, d1836 as c4, d409 as c5, d408 as c6, d406 as c7, d405 as c8, d1939 as c9, d1938 as c10, d2315 as c11, d2314 as c12, d2317 as c13, d2316 as c14, d2318 as c15, d2342 as c16 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d510 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d510;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageRequest"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifierRequest"]:c3(),["OrderLineItemTax"]:c4(),["SharedCodec147"]:c5(),["SharedCodec148"]:c6(),["SharedCodec149"]:c7(),["SharedCodec150"]:c8(),["SharedCodec503"]:c9(),["SharedCodec504"]:c10(),["SharedCodec597"]:c11(),["SharedCodec598"]:c12(),["SharedCodec599"]:c13(),["SharedCodec600"]:c14(),["SubscriptionPlanLineItemRequest"]:c15(),["TextModifierRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
