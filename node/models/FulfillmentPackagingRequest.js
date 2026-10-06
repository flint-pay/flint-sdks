import { d436 as c0, d346 as c1, d2269 as c2, d2323 as c3, d2324 as c4 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d346 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d346;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageRequest"]:c0(),["FulfillmentPackagingRequest"]:c1(),["ReturnShipmentLineItemAllocation"]:c2(),["ShippingDimensions"]:c3(),["ShippingWeight"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentPackagingRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
