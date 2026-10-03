import { d568 as c0, d569 as c1, d570 as c2, d596 as c3, d598 as c4, d626 as c5, d628 as c6, d629 as c7, d631 as c8, d670 as c9, d723 as c10, d74 as c11, d597 as c12 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d628 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d628;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressAdvisoryResource"]:c0(),["DeliveryAddressRequest"]:c1(),["DeliveryAddressResource"]:c2(),["DeliveryInputConstraint"]:c3(),["DeliveryInputRequirement"]:c4(),["DeliveryPickupAvailabilityCandidateOutcome"]:c5(),["DeliveryPickupAvailabilityLocationResource"]:c6(),["DeliveryPickupAvailabilityLocationSummary"]:c7(),["DeliveryPickupAvailabilityMethodResource"]:c8(),["DeliveryQuoteLineItemResource"]:c9(),["DeliveryWindowResource"]:c10(),["MoneyValue"]:c11(),["SharedCodec203"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPickupAvailabilityLocationResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
