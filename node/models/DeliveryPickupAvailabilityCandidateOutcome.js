import { d575 as c0, d576 as c1, d603 as c2, d605 as c3, d633 as c4, d732 as c5, d77 as c6, d604 as c7 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d633 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d633;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressAdvisoryResource"]:c0(),["DeliveryAddressRequest"]:c1(),["DeliveryInputConstraint"]:c2(),["DeliveryInputRequirement"]:c3(),["DeliveryPickupAvailabilityCandidateOutcome"]:c4(),["DeliveryWindowResource"]:c5(),["MoneyValue"]:c6(),["SharedCodec206"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPickupAvailabilityCandidateOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
