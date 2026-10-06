import { d64 as c0, d176 as c1, d77 as c2, d1872 as c3, d1873 as c4, d2312 as c5, d63 as c6, d1976 as c7, d1975 as c8, d2348 as c9, d2349 as c10, d2350 as c11, d2351 as c12, d2380 as c13 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2351 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2351;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifier"]:c3(),["OrderLineItemTax"]:c4(),["SelectedProductOption"]:c5(),["SharedCodec17"]:c6(),["SharedCodec514"]:c7(),["SharedCodec515"]:c8(),["SharedCodec608"]:c9(),["SharedCodec609"]:c10(),["SharedCodec610"]:c11(),["SubscriptionPlanLineItem"]:c12(),["TextModifierRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
