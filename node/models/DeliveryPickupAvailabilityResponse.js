import { d519 as c0, d520 as c1, d521 as c2, d547 as c3, d549 as c4, d576 as c5, d577 as c6, d578 as c7, d579 as c8, d580 as c9, d582 as c10, d584 as c11, d621 as c12, d674 as c13, d69 as c14, d1646 as c15, d1645 as c16, d1959 as c17, d1960 as c18, d548 as c19 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d584 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d584;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressAdvisoryResource"]:c0(),["DeliveryAddressRequest"]:c1(),["DeliveryAddressResource"]:c2(),["DeliveryInputConstraint"]:c3(),["DeliveryInputRequirement"]:c4(),["DeliveryPickupAvailability"]:c5(),["DeliveryPickupAvailabilityCandidateOutcome"]:c6(),["DeliveryPickupAvailabilityDiagnostic"]:c7(),["DeliveryPickupAvailabilityLocationResource"]:c8(),["DeliveryPickupAvailabilityLocationSummary"]:c9(),["DeliveryPickupAvailabilityMethodResource"]:c10(),["DeliveryPickupAvailabilityResponse"]:c11(),["DeliveryQuoteLineItemResource"]:c12(),["DeliveryWindowResource"]:c13(),["MoneyValue"]:c14(),["NextAction"]:c15(),["NextActionMerchantAccountSession"]:c16(),["ResponseMeta"]:c17(),["ResponseWarning"]:c18(),["SharedCodec182"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPickupAvailabilityResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
