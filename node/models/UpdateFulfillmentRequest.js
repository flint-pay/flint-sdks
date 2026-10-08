import { d798 as c0, d66 as c1, d67 as c2, d2462 as c3, d2463 as c4, d2465 as c5, d2466 as c6, d2468 as c7, d318 as c8, d317 as c9, d2447 as c10, d2461 as c11, d2469 as c12, d2464 as c13, d2467 as c14 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2469 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2469;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentRecipient"]:c0(),["PostalAddress"]:c1(),["SharedCodec14"]:c2(),["SharedCodec615"]:c3(),["SharedCodec616"]:c4(),["SharedCodec617"]:c5(),["SharedCodec618"]:c6(),["SharedCodec619"]:c7(),["SharedCodec91"]:c8(),["SharedCodec92"]:c9(),["UpdateDeliveryFulfillmentDetails"]:c10(),["UpdateDigitalFulfillmentDetails"]:c11(),["UpdateFulfillmentRequest"]:c12(),["UpdatePickupFulfillmentDetails"]:c13(),["UpdateServiceFulfillmentDetails"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
