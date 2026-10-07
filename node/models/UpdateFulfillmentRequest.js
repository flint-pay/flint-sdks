import { d826 as c0, d73 as c1, d349 as c2, d348 as c3, d74 as c4, d2427 as c5, d2428 as c6, d2430 as c7, d2431 as c8, d2433 as c9, d2412 as c10, d2426 as c11, d2434 as c12, d2429 as c13, d2432 as c14 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2434 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2434;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentRecipient"]:c0(),["PostalAddress"]:c1(),["SharedCodec115"]:c2(),["SharedCodec116"]:c3(),["SharedCodec19"]:c4(),["SharedCodec639"]:c5(),["SharedCodec640"]:c6(),["SharedCodec641"]:c7(),["SharedCodec642"]:c8(),["SharedCodec643"]:c9(),["UpdateDeliveryFulfillmentDetails"]:c10(),["UpdateDigitalFulfillmentDetails"]:c11(),["UpdateFulfillmentRequest"]:c12(),["UpdatePickupFulfillmentDetails"]:c13(),["UpdateServiceFulfillmentDetails"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
