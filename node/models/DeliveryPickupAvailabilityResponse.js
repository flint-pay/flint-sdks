import { d570 as c0, d571 as c1, d572 as c2, d598 as c3, d600 as c4, d627 as c5, d628 as c6, d629 as c7, d630 as c8, d631 as c9, d633 as c10, d635 as c11, d672 as c12, d725 as c13, d74 as c14, d1786 as c15, d1785 as c16, d2121 as c17, d2122 as c18, d599 as c19 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d635 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d635;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressAdvisoryResource"]:c0(),["DeliveryAddressRequest"]:c1(),["DeliveryAddressResource"]:c2(),["DeliveryInputConstraint"]:c3(),["DeliveryInputRequirement"]:c4(),["DeliveryPickupAvailability"]:c5(),["DeliveryPickupAvailabilityCandidateOutcome"]:c6(),["DeliveryPickupAvailabilityDiagnostic"]:c7(),["DeliveryPickupAvailabilityLocationResource"]:c8(),["DeliveryPickupAvailabilityLocationSummary"]:c9(),["DeliveryPickupAvailabilityMethodResource"]:c10(),["DeliveryPickupAvailabilityResponse"]:c11(),["DeliveryQuoteLineItemResource"]:c12(),["DeliveryWindowResource"]:c13(),["MoneyValue"]:c14(),["NextAction"]:c15(),["NextActionMerchantAccountSession"]:c16(),["ResponseMeta"]:c17(),["ResponseWarning"]:c18(),["SharedCodec203"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPickupAvailabilityResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
