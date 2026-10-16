import { d59 as c0, d61 as c1, d136 as c2, d894 as c3, d323 as c4, d1879 as c5, d2334 as c6, d2383 as c7, d2431 as c8 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2383 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2383;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BundleComponentVariantSummary"]:c1(),["CategoryReference"]:c2(),["Image"]:c3(),["MoneyValue"]:c4(),["OrderLineItemModifier"]:c5(),["SelectedProductOption"]:c6(),["SubscriptionLineItem"]:c7(),["TextModifierRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
