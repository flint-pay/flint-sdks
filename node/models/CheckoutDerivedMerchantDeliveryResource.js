import { d130 as c0, d93 as c1, d584 as c2, d585 as c3, d586 as c4, d587 as c5, d596 as c6, d606 as c7, d612 as c8, d614 as c9, d621 as c10, d622 as c11, d639 as c12, d649 as c13, d650 as c14, d686 as c15, d687 as c16, d688 as c17, d706 as c18, d731 as c19, d741 as c20, d77 as c21, d613 as c22 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d93 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d93;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerInstructionsConfig"]:c0(),["CheckoutDerivedMerchantDeliveryResource"]:c1(),["DeliveryAddressAdvisoryResource"]:c2(),["DeliveryAddressRequest"]:c3(),["DeliveryAddressResource"]:c4(),["DeliveryArrivalEstimate"]:c5(),["DeliveryCandidateOutcomeResource"]:c6(),["DeliveryEligibilityMismatch"]:c7(),["DeliveryInputConstraint"]:c8(),["DeliveryInputRequirement"]:c9(),["DeliveryLocationSummaryResource"]:c10(),["DeliveryMerchantDiagnostic"]:c11(),["DeliveryOptionProjection"]:c12(),["DeliveryPickupDetails"]:c13(),["DeliveryPlan"]:c14(),["DeliveryQuoteChoiceGroupResource"]:c15(),["DeliveryQuoteExecutionLegResource"]:c16(),["DeliveryQuoteLineItemResource"]:c17(),["DeliveryRecipientRequirement"]:c18(),["DeliveryShipmentDetails"]:c19(),["DeliveryWindowResource"]:c20(),["MoneyValue"]:c21(),["SharedCodec207"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutDerivedMerchantDeliveryResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
