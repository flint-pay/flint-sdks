import { d59 as c0, d61 as c1, d136 as c2, d894 as c3, d323 as c4, d1879 as c5, d1880 as c6, d2334 as c7, d1995 as c8, d1994 as c9, d2393 as c10, d2394 as c11, d2395 as c12, d2403 as c13, d2431 as c14 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2395 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2395;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BundleComponentVariantSummary"]:c1(),["CategoryReference"]:c2(),["Image"]:c3(),["MoneyValue"]:c4(),["OrderLineItemModifier"]:c5(),["OrderLineItemTax"]:c6(),["SelectedProductOption"]:c7(),["SharedCodec500"]:c8(),["SharedCodec501"]:c9(),["SharedCodec589"]:c10(),["SharedCodec590"]:c11(),["SubscriptionPlanLineItem"]:c12(),["SubscriptionPlanSwapVariant"]:c13(),["TextModifierRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
