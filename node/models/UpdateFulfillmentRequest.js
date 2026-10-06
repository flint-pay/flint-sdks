import { d826 as c0, d73 as c1, d349 as c2, d348 as c3, d74 as c4, d2426 as c5, d2427 as c6, d2429 as c7, d2430 as c8, d2432 as c9, d2411 as c10, d2425 as c11, d2433 as c12, d2428 as c13, d2431 as c14 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2433 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2433;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentRecipient"]:c0(),["PostalAddress"]:c1(),["SharedCodec115"]:c2(),["SharedCodec116"]:c3(),["SharedCodec19"]:c4(),["SharedCodec638"]:c5(),["SharedCodec639"]:c6(),["SharedCodec640"]:c7(),["SharedCodec641"]:c8(),["SharedCodec642"]:c9(),["UpdateDeliveryFulfillmentDetails"]:c10(),["UpdateDigitalFulfillmentDetails"]:c11(),["UpdateFulfillmentRequest"]:c12(),["UpdatePickupFulfillmentDetails"]:c13(),["UpdateServiceFulfillmentDetails"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
