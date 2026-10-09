import { d585 as c0, d704 as c1 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d585 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d585;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryLocalDeliveryDetails"]:c0(),["DeliveryShipmentDetails"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryLocalDeliveryDetails(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
