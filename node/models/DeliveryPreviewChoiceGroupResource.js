import { d89 as c0, d548 as c1, d549 as c2, d550 as c3, d551 as c4, d563 as c5, d580 as c6, d582 as c7, d590 as c8, d612 as c9, d622 as c10, d623 as c11, d627 as c12, d658 as c13, d659 as c14, d678 as c15, d704 as c16, d714 as c17, d323 as c18, d581 as c19 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d627 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d627;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerInstructionsConfig"]:c0(),["DeliveryAddressAdvisoryResource"]:c1(),["DeliveryAddressRequest"]:c2(),["DeliveryAddressResource"]:c3(),["DeliveryArrivalEstimate"]:c4(),["DeliveryCandidateOutcomeResource"]:c5(),["DeliveryInputConstraint"]:c6(),["DeliveryInputRequirement"]:c7(),["DeliveryLocationSummaryResource"]:c8(),["DeliveryOptionProjection"]:c9(),["DeliveryPickupDetails"]:c10(),["DeliveryPlan"]:c11(),["DeliveryPreviewChoiceGroupResource"]:c12(),["DeliveryQuoteExecutionLegResource"]:c13(),["DeliveryQuoteLineItemResource"]:c14(),["DeliveryRecipientRequirement"]:c15(),["DeliveryShipmentDetails"]:c16(),["DeliveryWindowResource"]:c17(),["MoneyValue"]:c18(),["SharedCodec180"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPreviewChoiceGroupResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
