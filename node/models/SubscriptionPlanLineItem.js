import { d64 as c0, d172 as c1, d77 as c2, d1846 as c3, d1847 as c4, d2286 as c5, d63 as c6, d1950 as c7, d1949 as c8, d2322 as c9, d2323 as c10, d2324 as c11, d2325 as c12, d2354 as c13 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2325 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2325;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifier"]:c3(),["OrderLineItemTax"]:c4(),["SelectedProductOption"]:c5(),["SharedCodec17"]:c6(),["SharedCodec512"]:c7(),["SharedCodec513"]:c8(),["SharedCodec606"]:c9(),["SharedCodec607"]:c10(),["SharedCodec608"]:c11(),["SubscriptionPlanLineItem"]:c12(),["TextModifierRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
