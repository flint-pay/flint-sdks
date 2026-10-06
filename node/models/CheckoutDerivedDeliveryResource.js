import { d81 as c0, d82 as c1, d84 as c2, d128 as c3, d94 as c4, d575 as c5, d576 as c6, d577 as c7, d578 as c8, d603 as c9, d612 as c10, d640 as c11, d641 as c12, d679 as c13, d697 as c14, d722 as c15, d732 as c16, d77 as c17 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d94 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d94;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryInputRequirementResource"]:c0(),["BuyerDeliveryOptionResource"]:c1(),["BuyerDeliveryQuoteChoiceGroupResource"]:c2(),["BuyerInstructionsConfig"]:c3(),["CheckoutDerivedDeliveryResource"]:c4(),["DeliveryAddressAdvisoryResource"]:c5(),["DeliveryAddressRequest"]:c6(),["DeliveryAddressResource"]:c7(),["DeliveryArrivalEstimate"]:c8(),["DeliveryInputConstraint"]:c9(),["DeliveryLocationSummaryResource"]:c10(),["DeliveryPickupDetails"]:c11(),["DeliveryPlan"]:c12(),["DeliveryQuoteLineItemResource"]:c13(),["DeliveryRecipientRequirement"]:c14(),["DeliveryShipmentDetails"]:c15(),["DeliveryWindowResource"]:c16(),["MoneyValue"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutDerivedDeliveryResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
