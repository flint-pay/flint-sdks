import { d78 as c0, d82 as c1, d83 as c2, d118 as c3, d570 as c4, d596 as c5, d605 as c6, d634 as c7, d635 as c8, d195 as c9, d708 as c10, d713 as c11, d723 as c12, d74 as c13, d117 as c14 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d118 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d118;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryInputRequirementResource"]:c0(),["BuyerDeliverySelection"]:c1(),["BuyerDeliverySelectionChoiceResource"]:c2(),["BuyerEffectiveDeliverySelectionResource"]:c3(),["DeliveryAddressResource"]:c4(),["DeliveryInputConstraint"]:c5(),["DeliveryLocationSummaryResource"]:c6(),["DeliveryPickupDetails"]:c7(),["DeliveryPlan"]:c8(),["DeliveryRecipientResource"]:c9(),["DeliverySelectionInstructionsRequest"]:c10(),["DeliveryShipmentDetails"]:c11(),["DeliveryWindowResource"]:c12(),["MoneyValue"]:c13(),["SharedCodec38"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerEffectiveDeliverySelectionResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
