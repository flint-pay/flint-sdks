import { d78 as c0, d79 as c1, d81 as c2, d124 as c3, d570 as c4, d571 as c5, d572 as c6, d573 as c7, d598 as c8, d607 as c9, d636 as c10, d637 as c11, d672 as c12, d690 as c13, d715 as c14, d725 as c15, d74 as c16 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d81 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d81;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryInputRequirementResource"]:c0(),["BuyerDeliveryOptionResource"]:c1(),["BuyerDeliveryQuoteChoiceGroupResource"]:c2(),["BuyerInstructionsConfig"]:c3(),["DeliveryAddressAdvisoryResource"]:c4(),["DeliveryAddressRequest"]:c5(),["DeliveryAddressResource"]:c6(),["DeliveryArrivalEstimate"]:c7(),["DeliveryInputConstraint"]:c8(),["DeliveryLocationSummaryResource"]:c9(),["DeliveryPickupDetails"]:c10(),["DeliveryPlan"]:c11(),["DeliveryQuoteLineItemResource"]:c12(),["DeliveryRecipientRequirement"]:c13(),["DeliveryShipmentDetails"]:c14(),["DeliveryWindowResource"]:c15(),["MoneyValue"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerDeliveryQuoteChoiceGroupResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
