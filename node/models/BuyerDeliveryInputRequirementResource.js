import { d81 as c0, d603 as c1, d732 as c2, d77 as c3 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d81 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d81;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryInputRequirementResource"]:c0(),["DeliveryInputConstraint"]:c1(),["DeliveryWindowResource"]:c2(),["MoneyValue"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerDeliveryInputRequirementResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
