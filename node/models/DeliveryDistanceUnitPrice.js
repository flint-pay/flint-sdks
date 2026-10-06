import { d593 as c0, d594 as c1, d77 as c2 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d593 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d593;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryDistanceUnitPrice"]:c0(),["DeliveryDistanceUnitPriceRequest"]:c1(),["MoneyValue"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryDistanceUnitPrice(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
