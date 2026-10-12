import { d679 as c0, d323 as c1, d66 as c2, d2339 as c3, d2348 as c4, d2349 as c5, d2356 as c6 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d2348 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2348;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRecipientResource"]:c0(),["MoneyValue"]:c1(),["PostalAddress"]:c2(),["SubscriptionAddressVerification"]:c3(),["SubscriptionDelivery"]:c4(),["SubscriptionDeliveryDestination"]:c5(),["SubscriptionDeliveryMethodSummary"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionDelivery(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
