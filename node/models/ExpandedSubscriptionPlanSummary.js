import { d59 as c0, d61 as c1, d136 as c2, d770 as c3, d889 as c4, d323 as c5, d1874 as c6, d1875 as c7, d2318 as c8, d1981 as c9, d1980 as c10, d2377 as c11, d2378 as c12, d2365 as c13, d2379 as c14, d2387 as c15, d2415 as c16 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d770 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d770;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BundleComponentVariantSummary"]:c1(),["CategoryReference"]:c2(),["ExpandedSubscriptionPlanSummary"]:c3(),["Image"]:c4(),["MoneyValue"]:c5(),["OrderLineItemModifier"]:c6(),["OrderLineItemTax"]:c7(),["SelectedProductOption"]:c8(),["SharedCodec495"]:c9(),["SharedCodec496"]:c10(),["SharedCodec584"]:c11(),["SharedCodec585"]:c12(),["SubscriptionIntervalOption"]:c13(),["SubscriptionPlanLineItem"]:c14(),["SubscriptionPlanSwapVariant"]:c15(),["TextModifierRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeExpandedSubscriptionPlanSummary(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
