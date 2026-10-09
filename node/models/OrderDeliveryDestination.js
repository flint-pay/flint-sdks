import { d1851 as c0, d1852 as c1, d1854 as c2 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1851 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1851;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderDeliveryDestination"]:c0(),["OrderDeliveryDestinationAddress"]:c1(),["OrderDeliveryDestinationRecipient"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDeliveryDestination(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
