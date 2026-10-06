import { d281 as c0, d342 as c1, d350 as c2, d436 as c3, d454 as c4, d511 as c5, d819 as c6, d346 as c7, d826 as c8, d73 as c9, d2269 as c10, d347 as c11, d349 as c12, d348 as c13, d2323 as c14, d2324 as c15 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d350 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d350;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryFulfillmentDetails"]:c0(),["CreateDigitalFulfillmentDetails"]:c1(),["CreateFulfillmentRequest"]:c2(),["CreatePackageRequest"]:c3(),["CreatePickupFulfillmentDetails"]:c4(),["CreateServiceFulfillmentDetails"]:c5(),["FulfillmentLineItemRequest"]:c6(),["FulfillmentPackagingRequest"]:c7(),["FulfillmentRecipient"]:c8(),["PostalAddress"]:c9(),["ReturnShipmentLineItemAllocation"]:c10(),["SharedCodec114"]:c11(),["SharedCodec115"]:c12(),["SharedCodec116"]:c13(),["ShippingDimensions"]:c14(),["ShippingWeight"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
