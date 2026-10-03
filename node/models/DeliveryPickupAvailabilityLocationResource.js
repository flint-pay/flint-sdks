import { d570 as c0, d571 as c1, d572 as c2, d598 as c3, d600 as c4, d628 as c5, d630 as c6, d631 as c7, d633 as c8, d672 as c9, d725 as c10, d74 as c11, d599 as c12 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d630 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d630;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressAdvisoryResource"]:c0(),["DeliveryAddressRequest"]:c1(),["DeliveryAddressResource"]:c2(),["DeliveryInputConstraint"]:c3(),["DeliveryInputRequirement"]:c4(),["DeliveryPickupAvailabilityCandidateOutcome"]:c5(),["DeliveryPickupAvailabilityLocationResource"]:c6(),["DeliveryPickupAvailabilityLocationSummary"]:c7(),["DeliveryPickupAvailabilityMethodResource"]:c8(),["DeliveryQuoteLineItemResource"]:c9(),["DeliveryWindowResource"]:c10(),["MoneyValue"]:c11(),["SharedCodec203"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPickupAvailabilityLocationResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
