import { d128 as c0, d93 as c1, d575 as c2, d576 as c3, d577 as c4, d578 as c5, d587 as c6, d597 as c7, d603 as c8, d605 as c9, d612 as c10, d613 as c11, d630 as c12, d640 as c13, d641 as c14, d677 as c15, d678 as c16, d679 as c17, d697 as c18, d722 as c19, d732 as c20, d77 as c21, d604 as c22 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d93 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d93;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerInstructionsConfig"]:c0(),["CheckoutDerivedMerchantDeliveryResource"]:c1(),["DeliveryAddressAdvisoryResource"]:c2(),["DeliveryAddressRequest"]:c3(),["DeliveryAddressResource"]:c4(),["DeliveryArrivalEstimate"]:c5(),["DeliveryCandidateOutcomeResource"]:c6(),["DeliveryEligibilityMismatch"]:c7(),["DeliveryInputConstraint"]:c8(),["DeliveryInputRequirement"]:c9(),["DeliveryLocationSummaryResource"]:c10(),["DeliveryMerchantDiagnostic"]:c11(),["DeliveryOptionProjection"]:c12(),["DeliveryPickupDetails"]:c13(),["DeliveryPlan"]:c14(),["DeliveryQuoteChoiceGroupResource"]:c15(),["DeliveryQuoteExecutionLegResource"]:c16(),["DeliveryQuoteLineItemResource"]:c17(),["DeliveryRecipientRequirement"]:c18(),["DeliveryShipmentDetails"]:c19(),["DeliveryWindowResource"]:c20(),["MoneyValue"]:c21(),["SharedCodec206"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutDerivedMerchantDeliveryResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
