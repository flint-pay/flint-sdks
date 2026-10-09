import { d2505 as c0, d2506 as c1, d2327 as c2, d2328 as c3, d2507 as c4 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2507 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2507;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec635"]:c0(),["SharedCodec636"]:c1(),["ShippingDimensions"]:c2(),["ShippingWeight"]:c3(),["UpdatePackageRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
