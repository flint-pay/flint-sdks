import { d81 as c0, d85 as c1, d86 as c2, d122 as c3, d577 as c4, d603 as c5, d612 as c6, d640 as c7, d641 as c8, d198 as c9, d717 as c10, d722 as c11, d732 as c12, d77 as c13, d121 as c14 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d122 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d122;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryInputRequirementResource"]:c0(),["BuyerDeliverySelection"]:c1(),["BuyerDeliverySelectionChoiceResource"]:c2(),["BuyerEffectiveDeliverySelectionResource"]:c3(),["DeliveryAddressResource"]:c4(),["DeliveryInputConstraint"]:c5(),["DeliveryLocationSummaryResource"]:c6(),["DeliveryPickupDetails"]:c7(),["DeliveryPlan"]:c8(),["DeliveryRecipientResource"]:c9(),["DeliverySelectionInstructionsRequest"]:c10(),["DeliveryShipmentDetails"]:c11(),["DeliveryWindowResource"]:c12(),["MoneyValue"]:c13(),["SharedCodec40"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerEffectiveDeliverySelectionResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
