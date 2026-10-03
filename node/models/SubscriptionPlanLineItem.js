import { d61 as c0, d171 as c1, d74 as c2, d1835 as c3, d1836 as c4, d2275 as c5, d60 as c6, d1939 as c7, d1938 as c8, d2310 as c9, d2311 as c10, d2312 as c11, d2313 as c12, d2342 as c13 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2313 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2313;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifier"]:c3(),["OrderLineItemTax"]:c4(),["SelectedProductOption"]:c5(),["SharedCodec16"]:c6(),["SharedCodec503"]:c7(),["SharedCodec504"]:c8(),["SharedCodec594"]:c9(),["SharedCodec595"]:c10(),["SharedCodec596"]:c11(),["SubscriptionPlanLineItem"]:c12(),["TextModifierRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
