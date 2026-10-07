import { d777 as c0, d66 as c1, d67 as c2, d2378 as c3, d2379 as c4, d2381 as c5, d2382 as c6, d2384 as c7, d309 as c8, d308 as c9, d2363 as c10, d2377 as c11, d2385 as c12, d2380 as c13, d2383 as c14 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2385 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2385;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentRecipient"]:c0(),["PostalAddress"]:c1(),["SharedCodec14"]:c2(),["SharedCodec590"]:c3(),["SharedCodec591"]:c4(),["SharedCodec592"]:c5(),["SharedCodec593"]:c6(),["SharedCodec594"]:c7(),["SharedCodec89"]:c8(),["SharedCodec90"]:c9(),["UpdateDeliveryFulfillmentDetails"]:c10(),["UpdateDigitalFulfillmentDetails"]:c11(),["UpdateFulfillmentRequest"]:c12(),["UpdatePickupFulfillmentDetails"]:c13(),["UpdateServiceFulfillmentDetails"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
