import { d282 as c0, d343 as c1, d351 as c2, d437 as c3, d455 as c4, d512 as c5, d826 as c6, d347 as c7, d789 as c8, d73 as c9, d2276 as c10, d348 as c11, d350 as c12, d349 as c13, d2330 as c14, d2331 as c15 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d351 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d351;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryFulfillmentDetails"]:c0(),["CreateDigitalFulfillmentDetails"]:c1(),["CreateFulfillmentRequest"]:c2(),["CreatePackageRequest"]:c3(),["CreatePickupFulfillmentDetails"]:c4(),["CreateServiceFulfillmentDetails"]:c5(),["FulfillmentLineItemRequest"]:c6(),["FulfillmentPackagingRequest"]:c7(),["FulfillmentRecipient"]:c8(),["PostalAddress"]:c9(),["ReturnShipmentLineItemAllocation"]:c10(),["SharedCodec114"]:c11(),["SharedCodec115"]:c12(),["SharedCodec116"]:c13(),["ShippingDimensions"]:c14(),["ShippingWeight"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
