import { d612 as c0, d741 as c1, d77 as c2 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d612 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d612;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryInputConstraint"]:c0(),["DeliveryWindowResource"]:c1(),["MoneyValue"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryInputConstraint(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
