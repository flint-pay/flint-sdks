import { d519 as c0, d520 as c1, d521 as c2, d547 as c3, d549 as c4, d577 as c5, d579 as c6, d580 as c7, d582 as c8, d621 as c9, d674 as c10, d69 as c11, d548 as c12 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d579 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d579;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressAdvisoryResource"]:c0(),["DeliveryAddressRequest"]:c1(),["DeliveryAddressResource"]:c2(),["DeliveryInputConstraint"]:c3(),["DeliveryInputRequirement"]:c4(),["DeliveryPickupAvailabilityCandidateOutcome"]:c5(),["DeliveryPickupAvailabilityLocationResource"]:c6(),["DeliveryPickupAvailabilityLocationSummary"]:c7(),["DeliveryPickupAvailabilityMethodResource"]:c8(),["DeliveryQuoteLineItemResource"]:c9(),["DeliveryWindowResource"]:c10(),["MoneyValue"]:c11(),["SharedCodec182"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPickupAvailabilityLocationResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
