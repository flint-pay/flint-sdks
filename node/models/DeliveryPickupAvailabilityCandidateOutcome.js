import { d527 as c0, d528 as c1, d559 as c2, d561 as c3, d594 as c4, d693 as c5, d314 as c6, d560 as c7 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d594 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d594;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressAdvisoryResource"]:c0(),["DeliveryAddressRequest"]:c1(),["DeliveryInputConstraint"]:c2(),["DeliveryInputRequirement"]:c3(),["DeliveryPickupAvailabilityCandidateOutcome"]:c4(),["DeliveryWindowResource"]:c5(),["MoneyValue"]:c6(),["SharedCodec171"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPickupAvailabilityCandidateOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
