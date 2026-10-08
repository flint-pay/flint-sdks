import { d89 as c0, d163 as c1, d548 as c2, d549 as c3, d550 as c4, d551 as c5, d563 as c6, d574 as c7, d580 as c8, d582 as c9, d590 as c10, d591 as c11, d612 as c12, d622 as c13, d623 as c14, d657 as c15, d658 as c16, d659 as c17, d678 as c18, d704 as c19, d714 as c20, d323 as c21, d581 as c22 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d163 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d163;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerInstructionsConfig"]:c0(),["CheckoutDerivedMerchantDeliveryResource"]:c1(),["DeliveryAddressAdvisoryResource"]:c2(),["DeliveryAddressRequest"]:c3(),["DeliveryAddressResource"]:c4(),["DeliveryArrivalEstimate"]:c5(),["DeliveryCandidateOutcomeResource"]:c6(),["DeliveryEligibilityMismatch"]:c7(),["DeliveryInputConstraint"]:c8(),["DeliveryInputRequirement"]:c9(),["DeliveryLocationSummaryResource"]:c10(),["DeliveryMerchantDiagnostic"]:c11(),["DeliveryOptionProjection"]:c12(),["DeliveryPickupDetails"]:c13(),["DeliveryPlan"]:c14(),["DeliveryQuoteChoiceGroupResource"]:c15(),["DeliveryQuoteExecutionLegResource"]:c16(),["DeliveryQuoteLineItemResource"]:c17(),["DeliveryRecipientRequirement"]:c18(),["DeliveryShipmentDetails"]:c19(),["DeliveryWindowResource"]:c20(),["MoneyValue"]:c21(),["SharedCodec180"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutDerivedMerchantDeliveryResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
