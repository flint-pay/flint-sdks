import { d806 as c0, d70 as c1, d336 as c2, d335 as c3, d71 as c4, d2385 as c5, d2386 as c6, d2388 as c7, d2389 as c8, d2391 as c9, d2370 as c10, d2384 as c11, d2392 as c12, d2387 as c13, d2390 as c14 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2392 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2392;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentRecipient"]:c0(),["PostalAddress"]:c1(),["SharedCodec112"]:c2(),["SharedCodec113"]:c3(),["SharedCodec18"]:c4(),["SharedCodec624"]:c5(),["SharedCodec625"]:c6(),["SharedCodec626"]:c7(),["SharedCodec627"]:c8(),["SharedCodec628"]:c9(),["UpdateDeliveryFulfillmentDetails"]:c10(),["UpdateDigitalFulfillmentDetails"]:c11(),["UpdateFulfillmentRequest"]:c12(),["UpdatePickupFulfillmentDetails"]:c13(),["UpdateServiceFulfillmentDetails"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
