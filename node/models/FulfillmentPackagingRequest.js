import { d390 as c0, d797 as c1, d2273 as c2, d2327 as c3, d2328 as c4 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d797 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d797;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageRequest"]:c0(),["FulfillmentPackagingRequest"]:c1(),["ReturnShipmentLineItemAllocation"]:c2(),["ShippingDimensions"]:c3(),["ShippingWeight"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentPackagingRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
