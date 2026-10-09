import { d59 as c0, d61 as c1, d136 as c2, d889 as c3, d1629 as c4, d323 as c5, d1874 as c6, d1875 as c7, d2318 as c8, d1626 as c9, d1627 as c10, d1628 as c11, d1981 as c12, d1980 as c13, d2377 as c14, d2378 as c15, d2347 as c16, d2354 as c17, d2365 as c18, d2376 as c19, d2379 as c20, d2387 as c21, d2415 as c22 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2376 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2376;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BundleComponentVariantSummary"]:c1(),["CategoryReference"]:c2(),["Image"]:c3(),["InventoryRoutingSourceRequest"]:c4(),["MoneyValue"]:c5(),["OrderLineItemModifier"]:c6(),["OrderLineItemTax"]:c7(),["SelectedProductOption"]:c8(),["SharedCodec403"]:c9(),["SharedCodec404"]:c10(),["SharedCodec405"]:c11(),["SharedCodec495"]:c12(),["SharedCodec496"]:c13(),["SharedCodec584"]:c14(),["SharedCodec585"]:c15(),["SubscriptionCounts"]:c16(),["SubscriptionDeliveryMethodCounts"]:c17(),["SubscriptionIntervalOption"]:c18(),["SubscriptionPlan"]:c19(),["SubscriptionPlanLineItem"]:c20(),["SubscriptionPlanSwapVariant"]:c21(),["TextModifierRequest"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlan(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
