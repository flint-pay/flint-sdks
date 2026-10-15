import { d59 as c0, d61 as c1, d136 as c2, d780 as c3, d894 as c4, d323 as c5, d1879 as c6, d1880 as c7, d2334 as c8, d1995 as c9, d1994 as c10, d2393 as c11, d2394 as c12, d2381 as c13, d2395 as c14, d2403 as c15, d2431 as c16 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d780 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d780;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BundleComponentVariantSummary"]:c1(),["CategoryReference"]:c2(),["ExpandedSubscriptionPlanSummary"]:c3(),["Image"]:c4(),["MoneyValue"]:c5(),["OrderLineItemModifier"]:c6(),["OrderLineItemTax"]:c7(),["SelectedProductOption"]:c8(),["SharedCodec500"]:c9(),["SharedCodec501"]:c10(),["SharedCodec589"]:c11(),["SharedCodec590"]:c12(),["SubscriptionIntervalOption"]:c13(),["SubscriptionPlanLineItem"]:c14(),["SubscriptionPlanSwapVariant"]:c15(),["TextModifierRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeExpandedSubscriptionPlanSummary(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
