import { d2320 as c0 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2320 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2320;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ServiceFulfillmentDetails"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeServiceFulfillmentDetails(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
