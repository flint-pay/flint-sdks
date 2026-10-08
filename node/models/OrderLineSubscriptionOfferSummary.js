import { d323 as c0, d1876 as c1, d1877 as c2, d2365 as c3 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1877 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1877;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineSubscriptionOfferDiscount"]:c1(),["OrderLineSubscriptionOfferSummary"]:c2(),["SubscriptionIntervalOption"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderLineSubscriptionOfferSummary(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
