import { d74 as c0, d407 as c1, d1836 as c2, d409 as c3, d408 as c4, d406 as c5, d405 as c6, d1939 as c7, d1938 as c8, d2315 as c9, d2314 as c10, d2317 as c11, d2316 as c12, d2342 as c13, d2476 as c14 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2476 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2476;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemModifierRequest"]:c1(),["OrderLineItemTax"]:c2(),["SharedCodec147"]:c3(),["SharedCodec148"]:c4(),["SharedCodec149"]:c5(),["SharedCodec150"]:c6(),["SharedCodec503"]:c7(),["SharedCodec504"]:c8(),["SharedCodec597"]:c9(),["SharedCodec598"]:c10(),["SharedCodec599"]:c11(),["SharedCodec600"]:c12(),["TextModifierRequest"]:c13(),["UpdateSubscriptionPlanLineItemRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
