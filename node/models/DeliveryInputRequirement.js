import { d580 as c0, d582 as c1, d714 as c2, d323 as c3, d581 as c4 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d582 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d582;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryInputConstraint"]:c0(),["DeliveryInputRequirement"]:c1(),["DeliveryWindowResource"]:c2(),["MoneyValue"]:c3(),["SharedCodec180"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryInputRequirement(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
