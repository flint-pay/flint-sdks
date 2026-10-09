import { d610 as c0, d608 as c1, d609 as c2, d287 as c3, d286 as c4 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d610 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d610;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelector"]:c0(),["SharedCodec191"]:c1(),["SharedCodec192"]:c2(),["SharedCodec82"]:c3(),["SharedCodec83"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelector(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
