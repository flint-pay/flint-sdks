import { d575 as c0, d576 as c1, d577 as c2, d603 as c3, d605 as c4, d632 as c5, d633 as c6, d634 as c7, d635 as c8, d636 as c9, d638 as c10, d679 as c11, d732 as c12, d77 as c13, d604 as c14 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d632 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d632;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressAdvisoryResource"]:c0(),["DeliveryAddressRequest"]:c1(),["DeliveryAddressResource"]:c2(),["DeliveryInputConstraint"]:c3(),["DeliveryInputRequirement"]:c4(),["DeliveryPickupAvailability"]:c5(),["DeliveryPickupAvailabilityCandidateOutcome"]:c6(),["DeliveryPickupAvailabilityDiagnostic"]:c7(),["DeliveryPickupAvailabilityLocationResource"]:c8(),["DeliveryPickupAvailabilityLocationSummary"]:c9(),["DeliveryPickupAvailabilityMethodResource"]:c10(),["DeliveryQuoteLineItemResource"]:c11(),["DeliveryWindowResource"]:c12(),["MoneyValue"]:c13(),["SharedCodec206"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPickupAvailability(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
