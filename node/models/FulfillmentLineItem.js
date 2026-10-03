import { d800 as c0, d74 as c1, d1835 as c2, d2342 as c3 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d800 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d800;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentLineItem"]:c0(),["MoneyValue"]:c1(),["OrderLineItemModifier"]:c2(),["TextModifierRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
