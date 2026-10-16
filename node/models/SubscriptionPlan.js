import { d59 as c0, d61 as c1, d136 as c2, d894 as c3, d1631 as c4, d323 as c5, d1879 as c6, d1880 as c7, d2334 as c8, d1628 as c9, d1629 as c10, d1630 as c11, d1995 as c12, d1994 as c13, d2393 as c14, d2394 as c15, d2363 as c16, d2370 as c17, d2381 as c18, d2392 as c19, d2395 as c20, d2403 as c21, d2431 as c22 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2392 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2392;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BundleComponentVariantSummary"]:c1(),["CategoryReference"]:c2(),["Image"]:c3(),["InventoryRoutingSourceRequest"]:c4(),["MoneyValue"]:c5(),["OrderLineItemModifier"]:c6(),["OrderLineItemTax"]:c7(),["SelectedProductOption"]:c8(),["SharedCodec404"]:c9(),["SharedCodec405"]:c10(),["SharedCodec406"]:c11(),["SharedCodec500"]:c12(),["SharedCodec501"]:c13(),["SharedCodec589"]:c14(),["SharedCodec590"]:c15(),["SubscriptionCounts"]:c16(),["SubscriptionDeliveryMethodCounts"]:c17(),["SubscriptionIntervalOption"]:c18(),["SubscriptionPlan"]:c19(),["SubscriptionPlanLineItem"]:c20(),["SubscriptionPlanSwapVariant"]:c21(),["TextModifierRequest"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlan(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
