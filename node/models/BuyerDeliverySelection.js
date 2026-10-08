import { d73 as c0, d77 as c1, d78 as c2, d550 as c3, d580 as c4, d590 as c5, d622 as c6, d623 as c7, d679 as c8, d699 as c9, d704 as c10, d714 as c11, d323 as c12 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d77 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d77;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryInputRequirementResource"]:c0(),["BuyerDeliverySelection"]:c1(),["BuyerDeliverySelectionChoiceResource"]:c2(),["DeliveryAddressResource"]:c3(),["DeliveryInputConstraint"]:c4(),["DeliveryLocationSummaryResource"]:c5(),["DeliveryPickupDetails"]:c6(),["DeliveryPlan"]:c7(),["DeliveryRecipientResource"]:c8(),["DeliverySelectionInstructionsRequest"]:c9(),["DeliveryShipmentDetails"]:c10(),["DeliveryWindowResource"]:c11(),["MoneyValue"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerDeliverySelection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
