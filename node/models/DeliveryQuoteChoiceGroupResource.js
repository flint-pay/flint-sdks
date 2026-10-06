import { d130 as c0, d584 as c1, d585 as c2, d586 as c3, d587 as c4, d596 as c5, d612 as c6, d614 as c7, d621 as c8, d639 as c9, d649 as c10, d650 as c11, d686 as c12, d687 as c13, d688 as c14, d706 as c15, d731 as c16, d741 as c17, d77 as c18, d613 as c19 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d686 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d686;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerInstructionsConfig"]:c0(),["DeliveryAddressAdvisoryResource"]:c1(),["DeliveryAddressRequest"]:c2(),["DeliveryAddressResource"]:c3(),["DeliveryArrivalEstimate"]:c4(),["DeliveryCandidateOutcomeResource"]:c5(),["DeliveryInputConstraint"]:c6(),["DeliveryInputRequirement"]:c7(),["DeliveryLocationSummaryResource"]:c8(),["DeliveryOptionProjection"]:c9(),["DeliveryPickupDetails"]:c10(),["DeliveryPlan"]:c11(),["DeliveryQuoteChoiceGroupResource"]:c12(),["DeliveryQuoteExecutionLegResource"]:c13(),["DeliveryQuoteLineItemResource"]:c14(),["DeliveryRecipientRequirement"]:c15(),["DeliveryShipmentDetails"]:c16(),["DeliveryWindowResource"]:c17(),["MoneyValue"]:c18(),["SharedCodec207"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryQuoteChoiceGroupResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
