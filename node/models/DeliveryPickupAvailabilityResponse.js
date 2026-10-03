import { d568 as c0, d569 as c1, d570 as c2, d596 as c3, d598 as c4, d625 as c5, d626 as c6, d627 as c7, d628 as c8, d629 as c9, d631 as c10, d633 as c11, d670 as c12, d723 as c13, d74 as c14, d1784 as c15, d1783 as c16, d2118 as c17, d2119 as c18, d597 as c19 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d633 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d633;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressAdvisoryResource"]:c0(),["DeliveryAddressRequest"]:c1(),["DeliveryAddressResource"]:c2(),["DeliveryInputConstraint"]:c3(),["DeliveryInputRequirement"]:c4(),["DeliveryPickupAvailability"]:c5(),["DeliveryPickupAvailabilityCandidateOutcome"]:c6(),["DeliveryPickupAvailabilityDiagnostic"]:c7(),["DeliveryPickupAvailabilityLocationResource"]:c8(),["DeliveryPickupAvailabilityLocationSummary"]:c9(),["DeliveryPickupAvailabilityMethodResource"]:c10(),["DeliveryPickupAvailabilityResponse"]:c11(),["DeliveryQuoteLineItemResource"]:c12(),["DeliveryWindowResource"]:c13(),["MoneyValue"]:c14(),["NextAction"]:c15(),["NextActionMerchantAccountSession"]:c16(),["ResponseMeta"]:c17(),["ResponseWarning"]:c18(),["SharedCodec203"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPickupAvailabilityResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
