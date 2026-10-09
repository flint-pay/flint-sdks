import { d488 as c0, d701 as c1, d1853 as c2, d66 as c3, d484 as c4, d485 as c5, d487 as c6, d486 as c7, d199 as c8, d200 as c9, d2343 as c10, d2344 as c11, d2350 as c12, d2351 as c13, d2396 as c14, d2397 as c15, d2342 as c16, d2345 as c17, d2352 as c18, d2364 as c19, d2398 as c20 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d488 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d488;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["OrderDeliveryDestinationAddressRequest"]:c2(),["PostalAddress"]:c3(),["SharedCodec166"]:c4(),["SharedCodec167"]:c5(),["SharedCodec168"]:c6(),["SharedCodec169"]:c7(),["SharedCodec34"]:c8(),["SharedCodec35"]:c9(),["SharedCodec580"]:c10(),["SharedCodec581"]:c11(),["SharedCodec582"]:c12(),["SharedCodec583"]:c13(),["SharedCodec593"]:c14(),["SharedCodec594"]:c15(),["SubscriptionBillingScheduleRequest"]:c16(),["SubscriptionBillingStartRequest"]:c17(),["SubscriptionDeliveryDestinationRequest"]:c18(),["SubscriptionDeliveryRequest"]:c19(),["SubscriptionServiceLocationRequest"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
