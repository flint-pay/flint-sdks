import { d124 as c0, d570 as c1, d571 as c2, d572 as c3, d573 as c4, d582 as c5, d598 as c6, d600 as c7, d607 as c8, d625 as c9, d636 as c10, d637 as c11, d671 as c12, d690 as c13, d715 as c14, d725 as c15, d74 as c16, d599 as c17 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d582 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d582;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerInstructionsConfig"]:c0(),["DeliveryAddressAdvisoryResource"]:c1(),["DeliveryAddressRequest"]:c2(),["DeliveryAddressResource"]:c3(),["DeliveryArrivalEstimate"]:c4(),["DeliveryCandidateOutcomeResource"]:c5(),["DeliveryInputConstraint"]:c6(),["DeliveryInputRequirement"]:c7(),["DeliveryLocationSummaryResource"]:c8(),["DeliveryOptionProjection"]:c9(),["DeliveryPickupDetails"]:c10(),["DeliveryPlan"]:c11(),["DeliveryQuoteExecutionLegResource"]:c12(),["DeliveryRecipientRequirement"]:c13(),["DeliveryShipmentDetails"]:c14(),["DeliveryWindowResource"]:c15(),["MoneyValue"]:c16(),["SharedCodec203"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryCandidateOutcomeResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
