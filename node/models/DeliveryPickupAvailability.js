import { d548 as c0, d549 as c1, d550 as c2, d580 as c3, d582 as c4, d614 as c5, d615 as c6, d616 as c7, d617 as c8, d618 as c9, d620 as c10, d659 as c11, d714 as c12, d323 as c13, d581 as c14 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d614 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d614;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressAdvisoryResource"]:c0(),["DeliveryAddressRequest"]:c1(),["DeliveryAddressResource"]:c2(),["DeliveryInputConstraint"]:c3(),["DeliveryInputRequirement"]:c4(),["DeliveryPickupAvailability"]:c5(),["DeliveryPickupAvailabilityCandidateOutcome"]:c6(),["DeliveryPickupAvailabilityDiagnostic"]:c7(),["DeliveryPickupAvailabilityLocationResource"]:c8(),["DeliveryPickupAvailabilityLocationSummary"]:c9(),["DeliveryPickupAvailabilityMethodResource"]:c10(),["DeliveryQuoteLineItemResource"]:c11(),["DeliveryWindowResource"]:c12(),["MoneyValue"]:c13(),["SharedCodec180"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPickupAvailability(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
