import { d808 as c0, d70 as c1, d338 as c2, d337 as c3, d71 as c4, d2388 as c5, d2389 as c6, d2391 as c7, d2392 as c8, d2394 as c9, d2373 as c10, d2387 as c11, d2395 as c12, d2390 as c13, d2393 as c14 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d2395 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2395;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentRecipient"]:c0(),["PostalAddress"]:c1(),["SharedCodec112"]:c2(),["SharedCodec113"]:c3(),["SharedCodec18"]:c4(),["SharedCodec624"]:c5(),["SharedCodec625"]:c6(),["SharedCodec626"]:c7(),["SharedCodec627"]:c8(),["SharedCodec628"]:c9(),["UpdateDeliveryFulfillmentDetails"]:c10(),["UpdateDigitalFulfillmentDetails"]:c11(),["UpdateFulfillmentRequest"]:c12(),["UpdatePickupFulfillmentDetails"]:c13(),["UpdateServiceFulfillmentDetails"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
