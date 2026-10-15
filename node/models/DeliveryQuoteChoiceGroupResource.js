import { d89 as c0, d558 as c1, d559 as c2, d560 as c3, d561 as c4, d573 as c5, d590 as c6, d592 as c7, d600 as c8, d622 as c9, d632 as c10, d633 as c11, d667 as c12, d668 as c13, d669 as c14, d688 as c15, d714 as c16, d724 as c17, d323 as c18, d591 as c19 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d667 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d667;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerInstructionsConfig"]:c0(),["DeliveryAddressAdvisoryResource"]:c1(),["DeliveryAddressRequest"]:c2(),["DeliveryAddressResource"]:c3(),["DeliveryArrivalEstimate"]:c4(),["DeliveryCandidateOutcomeResource"]:c5(),["DeliveryInputConstraint"]:c6(),["DeliveryInputRequirement"]:c7(),["DeliveryLocationSummaryResource"]:c8(),["DeliveryOptionProjection"]:c9(),["DeliveryPickupDetails"]:c10(),["DeliveryPlan"]:c11(),["DeliveryQuoteChoiceGroupResource"]:c12(),["DeliveryQuoteExecutionLegResource"]:c13(),["DeliveryQuoteLineItemResource"]:c14(),["DeliveryRecipientRequirement"]:c15(),["DeliveryShipmentDetails"]:c16(),["DeliveryWindowResource"]:c17(),["MoneyValue"]:c18(),["SharedCodec186"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryQuoteChoiceGroupResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
