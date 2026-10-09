import { d59 as c0, d61 as c1, d136 as c2, d889 as c3, d323 as c4, d1874 as c5, d1875 as c6, d2318 as c7, d1981 as c8, d1980 as c9, d2377 as c10, d2378 as c11, d2379 as c12, d2387 as c13, d2415 as c14 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2379 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2379;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BundleComponentVariantSummary"]:c1(),["CategoryReference"]:c2(),["Image"]:c3(),["MoneyValue"]:c4(),["OrderLineItemModifier"]:c5(),["OrderLineItemTax"]:c6(),["SelectedProductOption"]:c7(),["SharedCodec495"]:c8(),["SharedCodec496"]:c9(),["SharedCodec584"]:c10(),["SharedCodec585"]:c11(),["SubscriptionPlanLineItem"]:c12(),["SubscriptionPlanSwapVariant"]:c13(),["TextModifierRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
