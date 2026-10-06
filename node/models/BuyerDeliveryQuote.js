import { d81 as c0, d82 as c1, d83 as c2, d84 as c3, d128 as c4, d575 as c5, d576 as c6, d577 as c7, d578 as c8, d196 as c9, d588 as c10, d603 as c11, d612 as c12, d640 as c13, d641 as c14, d679 as c15, d697 as c16, d722 as c17, d732 as c18, d77 as c19, d194 as c20, d195 as c21 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d83 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d83;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryInputRequirementResource"]:c0(),["BuyerDeliveryOptionResource"]:c1(),["BuyerDeliveryQuote"]:c2(),["BuyerDeliveryQuoteChoiceGroupResource"]:c3(),["BuyerInstructionsConfig"]:c4(),["DeliveryAddressAdvisoryResource"]:c5(),["DeliveryAddressRequest"]:c6(),["DeliveryAddressResource"]:c7(),["DeliveryArrivalEstimate"]:c8(),["DeliveryBuyerLocationResource"]:c9(),["DeliveryCoordinateRequest"]:c10(),["DeliveryInputConstraint"]:c11(),["DeliveryLocationSummaryResource"]:c12(),["DeliveryPickupDetails"]:c13(),["DeliveryPlan"]:c14(),["DeliveryQuoteLineItemResource"]:c15(),["DeliveryRecipientRequirement"]:c16(),["DeliveryShipmentDetails"]:c17(),["DeliveryWindowResource"]:c18(),["MoneyValue"]:c19(),["SharedCodec55"]:c20(),["SharedCodec56"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerDeliveryQuote(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
