import { d89 as c0, d159 as c1, d527 as c2, d528 as c3, d529 as c4, d530 as c5, d542 as c6, d553 as c7, d559 as c8, d561 as c9, d569 as c10, d570 as c11, d591 as c12, d601 as c13, d602 as c14, d636 as c15, d637 as c16, d638 as c17, d657 as c18, d683 as c19, d693 as c20, d314 as c21, d560 as c22 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d159 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d159;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerInstructionsConfig"]:c0(),["CheckoutDerivedMerchantDeliveryResource"]:c1(),["DeliveryAddressAdvisoryResource"]:c2(),["DeliveryAddressRequest"]:c3(),["DeliveryAddressResource"]:c4(),["DeliveryArrivalEstimate"]:c5(),["DeliveryCandidateOutcomeResource"]:c6(),["DeliveryEligibilityMismatch"]:c7(),["DeliveryInputConstraint"]:c8(),["DeliveryInputRequirement"]:c9(),["DeliveryLocationSummaryResource"]:c10(),["DeliveryMerchantDiagnostic"]:c11(),["DeliveryOptionProjection"]:c12(),["DeliveryPickupDetails"]:c13(),["DeliveryPlan"]:c14(),["DeliveryQuoteChoiceGroupResource"]:c15(),["DeliveryQuoteExecutionLegResource"]:c16(),["DeliveryQuoteLineItemResource"]:c17(),["DeliveryRecipientRequirement"]:c18(),["DeliveryShipmentDetails"]:c19(),["DeliveryWindowResource"]:c20(),["MoneyValue"]:c21(),["SharedCodec171"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutDerivedMerchantDeliveryResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
