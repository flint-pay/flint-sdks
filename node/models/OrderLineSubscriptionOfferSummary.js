import { d323 as c0, d1882 as c1, d1883 as c2, d2381 as c3 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1883 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1883;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineSubscriptionOfferDiscount"]:c1(),["OrderLineSubscriptionOfferSummary"]:c2(),["SubscriptionIntervalOption"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderLineSubscriptionOfferSummary(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
