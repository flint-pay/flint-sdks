import { d81 as c0, d82 as c1, d84 as c2, d128 as c3, d575 as c4, d576 as c5, d577 as c6, d578 as c7, d603 as c8, d612 as c9, d640 as c10, d641 as c11, d679 as c12, d697 as c13, d722 as c14, d732 as c15, d77 as c16 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d84 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d84;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryInputRequirementResource"]:c0(),["BuyerDeliveryOptionResource"]:c1(),["BuyerDeliveryQuoteChoiceGroupResource"]:c2(),["BuyerInstructionsConfig"]:c3(),["DeliveryAddressAdvisoryResource"]:c4(),["DeliveryAddressRequest"]:c5(),["DeliveryAddressResource"]:c6(),["DeliveryArrivalEstimate"]:c7(),["DeliveryInputConstraint"]:c8(),["DeliveryLocationSummaryResource"]:c9(),["DeliveryPickupDetails"]:c10(),["DeliveryPlan"]:c11(),["DeliveryQuoteLineItemResource"]:c12(),["DeliveryRecipientRequirement"]:c13(),["DeliveryShipmentDetails"]:c14(),["DeliveryWindowResource"]:c15(),["MoneyValue"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerDeliveryQuoteChoiceGroupResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
