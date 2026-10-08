import { d73 as c0, d74 as c1, d75 as c2, d76 as c3, d89 as c4, d548 as c5, d549 as c6, d550 as c7, d551 as c8, d558 as c9, d564 as c10, d580 as c11, d590 as c12, d622 as c13, d623 as c14, d659 as c15, d678 as c16, d704 as c17, d714 as c18, d323 as c19, d555 as c20, d556 as c21 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d75 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d75;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryInputRequirementResource"]:c0(),["BuyerDeliveryOptionResource"]:c1(),["BuyerDeliveryQuote"]:c2(),["BuyerDeliveryQuoteChoiceGroupResource"]:c3(),["BuyerInstructionsConfig"]:c4(),["DeliveryAddressAdvisoryResource"]:c5(),["DeliveryAddressRequest"]:c6(),["DeliveryAddressResource"]:c7(),["DeliveryArrivalEstimate"]:c8(),["DeliveryBuyerLocationResource"]:c9(),["DeliveryCoordinateRequest"]:c10(),["DeliveryInputConstraint"]:c11(),["DeliveryLocationSummaryResource"]:c12(),["DeliveryPickupDetails"]:c13(),["DeliveryPlan"]:c14(),["DeliveryQuoteLineItemResource"]:c15(),["DeliveryRecipientRequirement"]:c16(),["DeliveryShipmentDetails"]:c17(),["DeliveryWindowResource"]:c18(),["MoneyValue"]:c19(),["SharedCodec176"]:c20(),["SharedCodec177"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerDeliveryQuote(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
