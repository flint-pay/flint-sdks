import { d130 as c0, d584 as c1, d585 as c2, d586 as c3, d587 as c4, d596 as c5, d612 as c6, d614 as c7, d621 as c8, d639 as c9, d649 as c10, d650 as c11, d687 as c12, d706 as c13, d731 as c14, d741 as c15, d77 as c16, d613 as c17 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d596 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d596;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerInstructionsConfig"]:c0(),["DeliveryAddressAdvisoryResource"]:c1(),["DeliveryAddressRequest"]:c2(),["DeliveryAddressResource"]:c3(),["DeliveryArrivalEstimate"]:c4(),["DeliveryCandidateOutcomeResource"]:c5(),["DeliveryInputConstraint"]:c6(),["DeliveryInputRequirement"]:c7(),["DeliveryLocationSummaryResource"]:c8(),["DeliveryOptionProjection"]:c9(),["DeliveryPickupDetails"]:c10(),["DeliveryPlan"]:c11(),["DeliveryQuoteExecutionLegResource"]:c12(),["DeliveryRecipientRequirement"]:c13(),["DeliveryShipmentDetails"]:c14(),["DeliveryWindowResource"]:c15(),["MoneyValue"]:c16(),["SharedCodec207"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryCandidateOutcomeResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
