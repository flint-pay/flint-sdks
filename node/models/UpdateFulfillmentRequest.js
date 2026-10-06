import { d814 as c0, d73 as c1, d344 as c2, d343 as c3, d74 as c4, d2400 as c5, d2401 as c6, d2403 as c7, d2404 as c8, d2406 as c9, d2385 as c10, d2399 as c11, d2407 as c12, d2402 as c13, d2405 as c14 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2407 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2407;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentRecipient"]:c0(),["PostalAddress"]:c1(),["SharedCodec115"]:c2(),["SharedCodec116"]:c3(),["SharedCodec19"]:c4(),["SharedCodec636"]:c5(),["SharedCodec637"]:c6(),["SharedCodec638"]:c7(),["SharedCodec639"]:c8(),["SharedCodec640"]:c9(),["UpdateDeliveryFulfillmentDetails"]:c10(),["UpdateDigitalFulfillmentDetails"]:c11(),["UpdateFulfillmentRequest"]:c12(),["UpdatePickupFulfillmentDetails"]:c13(),["UpdateServiceFulfillmentDetails"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
