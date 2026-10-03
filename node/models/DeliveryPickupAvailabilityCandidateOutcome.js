import { d568 as c0, d569 as c1, d596 as c2, d598 as c3, d626 as c4, d723 as c5, d74 as c6, d597 as c7 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d626 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d626;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressAdvisoryResource"]:c0(),["DeliveryAddressRequest"]:c1(),["DeliveryInputConstraint"]:c2(),["DeliveryInputRequirement"]:c3(),["DeliveryPickupAvailabilityCandidateOutcome"]:c4(),["DeliveryWindowResource"]:c5(),["MoneyValue"]:c6(),["SharedCodec203"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPickupAvailabilityCandidateOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
