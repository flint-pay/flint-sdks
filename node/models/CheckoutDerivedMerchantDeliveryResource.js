import { d113 as c0, d85 as c1, d519 as c2, d520 as c3, d521 as c4, d522 as c5, d531 as c6, d541 as c7, d547 as c8, d549 as c9, d556 as c10, d557 as c11, d574 as c12, d585 as c13, d586 as c14, d619 as c15, d620 as c16, d621 as c17, d639 as c18, d664 as c19, d674 as c20, d69 as c21, d548 as c22 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d85 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d85;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerInstructionsConfig"]:c0(),["CheckoutDerivedMerchantDeliveryResource"]:c1(),["DeliveryAddressAdvisoryResource"]:c2(),["DeliveryAddressRequest"]:c3(),["DeliveryAddressResource"]:c4(),["DeliveryArrivalEstimate"]:c5(),["DeliveryCandidateOutcomeResource"]:c6(),["DeliveryEligibilityMismatch"]:c7(),["DeliveryInputConstraint"]:c8(),["DeliveryInputRequirement"]:c9(),["DeliveryLocationSummaryResource"]:c10(),["DeliveryMerchantDiagnostic"]:c11(),["DeliveryOptionProjection"]:c12(),["DeliveryPickupDetails"]:c13(),["DeliveryPlan"]:c14(),["DeliveryQuoteChoiceGroupResource"]:c15(),["DeliveryQuoteExecutionLegResource"]:c16(),["DeliveryQuoteLineItemResource"]:c17(),["DeliveryRecipientRequirement"]:c18(),["DeliveryShipmentDetails"]:c19(),["DeliveryWindowResource"]:c20(),["MoneyValue"]:c21(),["SharedCodec182"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutDerivedMerchantDeliveryResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
