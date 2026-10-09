import { d679 as c0, d323 as c1, d66 as c2, d2339 as c3, d2348 as c4, d2349 as c5, d2356 as c6 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2348 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2348;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRecipientResource"]:c0(),["MoneyValue"]:c1(),["PostalAddress"]:c2(),["SubscriptionAddressVerification"]:c3(),["SubscriptionDelivery"]:c4(),["SubscriptionDeliveryDestination"]:c5(),["SubscriptionDeliveryMethodSummary"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionDelivery(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
