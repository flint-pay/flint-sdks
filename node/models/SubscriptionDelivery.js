import { d689 as c0, d323 as c1, d66 as c2, d2355 as c3, d2364 as c4, d2365 as c5, d2372 as c6 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2364 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2364;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRecipientResource"]:c0(),["MoneyValue"]:c1(),["PostalAddress"]:c2(),["SubscriptionAddressVerification"]:c3(),["SubscriptionDelivery"]:c4(),["SubscriptionDeliveryDestination"]:c5(),["SubscriptionDeliveryMethodSummary"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionDelivery(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
