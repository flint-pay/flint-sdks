import { d128 as c0, d575 as c1, d576 as c2, d577 as c3, d578 as c4, d587 as c5, d603 as c6, d605 as c7, d612 as c8, d630 as c9, d640 as c10, d641 as c11, d678 as c12, d697 as c13, d722 as c14, d732 as c15, d77 as c16, d604 as c17 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d587 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d587;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerInstructionsConfig"]:c0(),["DeliveryAddressAdvisoryResource"]:c1(),["DeliveryAddressRequest"]:c2(),["DeliveryAddressResource"]:c3(),["DeliveryArrivalEstimate"]:c4(),["DeliveryCandidateOutcomeResource"]:c5(),["DeliveryInputConstraint"]:c6(),["DeliveryInputRequirement"]:c7(),["DeliveryLocationSummaryResource"]:c8(),["DeliveryOptionProjection"]:c9(),["DeliveryPickupDetails"]:c10(),["DeliveryPlan"]:c11(),["DeliveryQuoteExecutionLegResource"]:c12(),["DeliveryRecipientRequirement"]:c13(),["DeliveryShipmentDetails"]:c14(),["DeliveryWindowResource"]:c15(),["MoneyValue"]:c16(),["SharedCodec206"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryCandidateOutcomeResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
