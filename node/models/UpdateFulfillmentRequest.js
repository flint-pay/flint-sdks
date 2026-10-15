import { d808 as c0, d66 as c1, d67 as c2, d2478 as c3, d2479 as c4, d2481 as c5, d2482 as c6, d2484 as c7, d318 as c8, d317 as c9, d2463 as c10, d2477 as c11, d2485 as c12, d2480 as c13, d2483 as c14 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2485 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2485;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentRecipient"]:c0(),["PostalAddress"]:c1(),["SharedCodec14"]:c2(),["SharedCodec620"]:c3(),["SharedCodec621"]:c4(),["SharedCodec622"]:c5(),["SharedCodec623"]:c6(),["SharedCodec624"]:c7(),["SharedCodec91"]:c8(),["SharedCodec92"]:c9(),["UpdateDeliveryFulfillmentDetails"]:c10(),["UpdateDigitalFulfillmentDetails"]:c11(),["UpdateFulfillmentRequest"]:c12(),["UpdatePickupFulfillmentDetails"]:c13(),["UpdateServiceFulfillmentDetails"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
