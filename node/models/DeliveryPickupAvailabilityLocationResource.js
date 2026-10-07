import { d527 as c0, d528 as c1, d529 as c2, d559 as c3, d561 as c4, d594 as c5, d596 as c6, d597 as c7, d599 as c8, d638 as c9, d693 as c10, d314 as c11, d560 as c12 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d596 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d596;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressAdvisoryResource"]:c0(),["DeliveryAddressRequest"]:c1(),["DeliveryAddressResource"]:c2(),["DeliveryInputConstraint"]:c3(),["DeliveryInputRequirement"]:c4(),["DeliveryPickupAvailabilityCandidateOutcome"]:c5(),["DeliveryPickupAvailabilityLocationResource"]:c6(),["DeliveryPickupAvailabilityLocationSummary"]:c7(),["DeliveryPickupAvailabilityMethodResource"]:c8(),["DeliveryQuoteLineItemResource"]:c9(),["DeliveryWindowResource"]:c10(),["MoneyValue"]:c11(),["SharedCodec171"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPickupAvailabilityLocationResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
