import { d128 as c0, d577 as c1, d578 as c2, d612 as c3, d630 as c4, d640 as c5, d641 as c6, d678 as c7, d697 as c8, d722 as c9, d732 as c10, d77 as c11 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d630 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d630;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerInstructionsConfig"]:c0(),["DeliveryAddressResource"]:c1(),["DeliveryArrivalEstimate"]:c2(),["DeliveryLocationSummaryResource"]:c3(),["DeliveryOptionProjection"]:c4(),["DeliveryPickupDetails"]:c5(),["DeliveryPlan"]:c6(),["DeliveryQuoteExecutionLegResource"]:c7(),["DeliveryRecipientRequirement"]:c8(),["DeliveryShipmentDetails"]:c9(),["DeliveryWindowResource"]:c10(),["MoneyValue"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryOptionProjection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
