import { d252 as c0, d312 as c1, d319 as c2, d390 as c3, d408 as c4, d465 as c5, d790 as c6, d797 as c7, d798 as c8, d66 as c9, d2273 as c10, d316 as c11, d318 as c12, d317 as c13, d2327 as c14, d2328 as c15 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d319 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d319;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryFulfillmentDetails"]:c0(),["CreateDigitalFulfillmentDetails"]:c1(),["CreateFulfillmentRequest"]:c2(),["CreatePackageRequest"]:c3(),["CreatePickupFulfillmentDetails"]:c4(),["CreateServiceFulfillmentDetails"]:c5(),["FulfillmentLineItemRequest"]:c6(),["FulfillmentPackagingRequest"]:c7(),["FulfillmentRecipient"]:c8(),["PostalAddress"]:c9(),["ReturnShipmentLineItemAllocation"]:c10(),["SharedCodec90"]:c11(),["SharedCodec91"]:c12(),["SharedCodec92"]:c13(),["ShippingDimensions"]:c14(),["ShippingWeight"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
