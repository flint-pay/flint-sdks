import { d59 as c0, d61 as c1, d135 as c2, d868 as c3, d314 as c4, d1775 as c5, d1776 as c6, d1829 as c7, d1830 as c8, d2112 as c9, d2113 as c10, d2268 as c11, d14 as c12, d1774 as c13, d1934 as c14, d1933 as c15, d2301 as c16, d2302 as c17, d2300 as c18, d2303 as c19, d2310 as c20, d2331 as c21 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2310 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2310;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BundleComponentVariantSummary"]:c1(),["CategoryReference"]:c2(),["Image"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["OrderLineItemModifier"]:c7(),["OrderLineItemTax"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10(),["SelectedProductOption"]:c11(),["SharedCodec1"]:c12(),["SharedCodec448"]:c13(),["SharedCodec477"]:c14(),["SharedCodec478"]:c15(),["SharedCodec562"]:c16(),["SharedCodec563"]:c17(),["SubscriptionPlan"]:c18(),["SubscriptionPlanLineItem"]:c19(),["SubscriptionPlanResponse"]:c20(),["TextModifierRequest"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
