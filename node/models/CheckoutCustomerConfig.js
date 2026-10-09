import { d145 as c0, d66 as c1, d2038 as c2 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d145 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d145;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomerConfig"]:c0(),["PostalAddress"]:c1(),["PrefilledCustomerInfo"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutCustomerConfig(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
