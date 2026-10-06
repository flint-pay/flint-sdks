import { d436 as c0, d2269 as c1, d2323 as c2, d2324 as c3 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d436 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d436;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageRequest"]:c0(),["ReturnShipmentLineItemAllocation"]:c1(),["ShippingDimensions"]:c2(),["ShippingWeight"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
