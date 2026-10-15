import { d392 as c0, d807 as c1, d2289 as c2, d2343 as c3, d2344 as c4 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d807 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d807;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageRequest"]:c0(),["FulfillmentPackagingRequest"]:c1(),["ReturnShipmentLineItemAllocation"]:c2(),["ShippingDimensions"]:c3(),["ShippingWeight"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentPackagingRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
