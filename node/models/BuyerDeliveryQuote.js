import { d78 as c0, d79 as c1, d80 as c2, d81 as c3, d124 as c4, d570 as c5, d571 as c6, d572 as c7, d573 as c8, d195 as c9, d583 as c10, d598 as c11, d607 as c12, d636 as c13, d637 as c14, d672 as c15, d690 as c16, d715 as c17, d725 as c18, d74 as c19, d193 as c20, d194 as c21 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d80 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d80;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryInputRequirementResource"]:c0(),["BuyerDeliveryOptionResource"]:c1(),["BuyerDeliveryQuote"]:c2(),["BuyerDeliveryQuoteChoiceGroupResource"]:c3(),["BuyerInstructionsConfig"]:c4(),["DeliveryAddressAdvisoryResource"]:c5(),["DeliveryAddressRequest"]:c6(),["DeliveryAddressResource"]:c7(),["DeliveryArrivalEstimate"]:c8(),["DeliveryBuyerLocationResource"]:c9(),["DeliveryCoordinateRequest"]:c10(),["DeliveryInputConstraint"]:c11(),["DeliveryLocationSummaryResource"]:c12(),["DeliveryPickupDetails"]:c13(),["DeliveryPlan"]:c14(),["DeliveryQuoteLineItemResource"]:c15(),["DeliveryRecipientRequirement"]:c16(),["DeliveryShipmentDetails"]:c17(),["DeliveryWindowResource"]:c18(),["MoneyValue"]:c19(),["SharedCodec55"]:c20(),["SharedCodec56"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerDeliveryQuote(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
