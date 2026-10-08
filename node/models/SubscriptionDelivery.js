import { d679 as c0, d323 as c1, d66 as c2, d2339 as c3, d2348 as c4, d2349 as c5, d2356 as c6 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2348 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2348;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRecipientResource"]:c0(),["MoneyValue"]:c1(),["PostalAddress"]:c2(),["SubscriptionAddressVerification"]:c3(),["SubscriptionDelivery"]:c4(),["SubscriptionDeliveryDestination"]:c5(),["SubscriptionDeliveryMethodSummary"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionDelivery(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
