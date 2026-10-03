import { d78 as c0, d82 as c1, d83 as c2, d570 as c3, d596 as c4, d605 as c5, d634 as c6, d635 as c7, d195 as c8, d708 as c9, d713 as c10, d723 as c11, d74 as c12 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d82 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d82;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryInputRequirementResource"]:c0(),["BuyerDeliverySelection"]:c1(),["BuyerDeliverySelectionChoiceResource"]:c2(),["DeliveryAddressResource"]:c3(),["DeliveryInputConstraint"]:c4(),["DeliveryLocationSummaryResource"]:c5(),["DeliveryPickupDetails"]:c6(),["DeliveryPlan"]:c7(),["DeliveryRecipientResource"]:c8(),["DeliverySelectionInstructionsRequest"]:c9(),["DeliveryShipmentDetails"]:c10(),["DeliveryWindowResource"]:c11(),["MoneyValue"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerDeliverySelection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
