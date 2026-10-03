import { d570 as c0, d571 as c1, d598 as c2, d600 as c3, d628 as c4, d725 as c5, d74 as c6, d599 as c7 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d628 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d628;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressAdvisoryResource"]:c0(),["DeliveryAddressRequest"]:c1(),["DeliveryInputConstraint"]:c2(),["DeliveryInputRequirement"]:c3(),["DeliveryPickupAvailabilityCandidateOutcome"]:c4(),["DeliveryWindowResource"]:c5(),["MoneyValue"]:c6(),["SharedCodec203"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPickupAvailabilityCandidateOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
