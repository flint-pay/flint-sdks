import { d789 as c0, d73 as c1, d350 as c2, d349 as c3, d74 as c4, d2433 as c5, d2434 as c6, d2436 as c7, d2437 as c8, d2439 as c9, d2418 as c10, d2432 as c11, d2440 as c12, d2435 as c13, d2438 as c14 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2440 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2440;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentRecipient"]:c0(),["PostalAddress"]:c1(),["SharedCodec115"]:c2(),["SharedCodec116"]:c3(),["SharedCodec19"]:c4(),["SharedCodec643"]:c5(),["SharedCodec644"]:c6(),["SharedCodec645"]:c7(),["SharedCodec646"]:c8(),["SharedCodec647"]:c9(),["UpdateDeliveryFulfillmentDetails"]:c10(),["UpdateDigitalFulfillmentDetails"]:c11(),["UpdateFulfillmentRequest"]:c12(),["UpdatePickupFulfillmentDetails"]:c13(),["UpdateServiceFulfillmentDetails"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
