import { d59 as c0, d61 as c1, d135 as c2, d749 as c3, d868 as c4, d314 as c5, d1829 as c6, d1830 as c7, d2268 as c8, d1934 as c9, d1933 as c10, d2301 as c11, d2302 as c12, d2303 as c13, d2331 as c14 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d749 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d749;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BundleComponentVariantSummary"]:c1(),["CategoryReference"]:c2(),["ExpandedSubscriptionPlanSummary"]:c3(),["Image"]:c4(),["MoneyValue"]:c5(),["OrderLineItemModifier"]:c6(),["OrderLineItemTax"]:c7(),["SelectedProductOption"]:c8(),["SharedCodec477"]:c9(),["SharedCodec478"]:c10(),["SharedCodec562"]:c11(),["SharedCodec563"]:c12(),["SubscriptionPlanLineItem"]:c13(),["TextModifierRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeExpandedSubscriptionPlanSummary(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
