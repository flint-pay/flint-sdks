import { d584 as c0, d585 as c1, d586 as c2, d612 as c3, d614 as c4, d642 as c5, d644 as c6, d645 as c7, d647 as c8, d688 as c9, d741 as c10, d77 as c11, d613 as c12 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d644 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d644;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressAdvisoryResource"]:c0(),["DeliveryAddressRequest"]:c1(),["DeliveryAddressResource"]:c2(),["DeliveryInputConstraint"]:c3(),["DeliveryInputRequirement"]:c4(),["DeliveryPickupAvailabilityCandidateOutcome"]:c5(),["DeliveryPickupAvailabilityLocationResource"]:c6(),["DeliveryPickupAvailabilityLocationSummary"]:c7(),["DeliveryPickupAvailabilityMethodResource"]:c8(),["DeliveryQuoteLineItemResource"]:c9(),["DeliveryWindowResource"]:c10(),["MoneyValue"]:c11(),["SharedCodec207"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPickupAvailabilityLocationResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
