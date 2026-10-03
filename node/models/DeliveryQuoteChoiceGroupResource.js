import { d124 as c0, d568 as c1, d569 as c2, d570 as c3, d571 as c4, d580 as c5, d596 as c6, d598 as c7, d605 as c8, d623 as c9, d634 as c10, d635 as c11, d668 as c12, d669 as c13, d670 as c14, d688 as c15, d713 as c16, d723 as c17, d74 as c18, d597 as c19 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d668 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d668;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerInstructionsConfig"]:c0(),["DeliveryAddressAdvisoryResource"]:c1(),["DeliveryAddressRequest"]:c2(),["DeliveryAddressResource"]:c3(),["DeliveryArrivalEstimate"]:c4(),["DeliveryCandidateOutcomeResource"]:c5(),["DeliveryInputConstraint"]:c6(),["DeliveryInputRequirement"]:c7(),["DeliveryLocationSummaryResource"]:c8(),["DeliveryOptionProjection"]:c9(),["DeliveryPickupDetails"]:c10(),["DeliveryPlan"]:c11(),["DeliveryQuoteChoiceGroupResource"]:c12(),["DeliveryQuoteExecutionLegResource"]:c13(),["DeliveryQuoteLineItemResource"]:c14(),["DeliveryRecipientRequirement"]:c15(),["DeliveryShipmentDetails"]:c16(),["DeliveryWindowResource"]:c17(),["MoneyValue"]:c18(),["SharedCodec203"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryQuoteChoiceGroupResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
