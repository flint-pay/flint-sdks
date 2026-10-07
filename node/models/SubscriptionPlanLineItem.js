import { d59 as c0, d61 as c1, d135 as c2, d868 as c3, d314 as c4, d1829 as c5, d1830 as c6, d2268 as c7, d1934 as c8, d1933 as c9, d2301 as c10, d2302 as c11, d2303 as c12, d2331 as c13 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2303 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2303;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BundleComponentVariantSummary"]:c1(),["CategoryReference"]:c2(),["Image"]:c3(),["MoneyValue"]:c4(),["OrderLineItemModifier"]:c5(),["OrderLineItemTax"]:c6(),["SelectedProductOption"]:c7(),["SharedCodec477"]:c8(),["SharedCodec478"]:c9(),["SharedCodec562"]:c10(),["SharedCodec563"]:c11(),["SubscriptionPlanLineItem"]:c12(),["TextModifierRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
