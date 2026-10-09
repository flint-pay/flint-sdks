import { d108 as c0, d110 as c1, d713 as c2, d323 as c3, d109 as c4 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d108 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d108;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryMethodResultRequest"]:c0(),["CallerSuppliedDeliveryOutcomeRequest"]:c1(),["DeliveryWindowRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec19"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryMethodResultRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
