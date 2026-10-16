import { d392 as c0, d807 as c1, d2289 as c2, d2343 as c3, d2344 as c4 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d807 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d807;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageRequest"]:c0(),["FulfillmentPackagingRequest"]:c1(),["ReturnShipmentLineItemAllocation"]:c2(),["ShippingDimensions"]:c3(),["ShippingWeight"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentPackagingRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
