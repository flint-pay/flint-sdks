import { d252 as c0, d312 as c1, d319 as c2, d392 as c3, d415 as c4, d475 as c5, d800 as c6, d807 as c7, d808 as c8, d66 as c9, d2289 as c10, d316 as c11, d318 as c12, d317 as c13, d2343 as c14, d2344 as c15 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d319 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d319;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryFulfillmentDetails"]:c0(),["CreateDigitalFulfillmentDetails"]:c1(),["CreateFulfillmentRequest"]:c2(),["CreatePackageRequest"]:c3(),["CreatePickupFulfillmentDetails"]:c4(),["CreateServiceFulfillmentDetails"]:c5(),["FulfillmentLineItemRequest"]:c6(),["FulfillmentPackagingRequest"]:c7(),["FulfillmentRecipient"]:c8(),["PostalAddress"]:c9(),["ReturnShipmentLineItemAllocation"]:c10(),["SharedCodec90"]:c11(),["SharedCodec91"]:c12(),["SharedCodec92"]:c13(),["ShippingDimensions"]:c14(),["ShippingWeight"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
