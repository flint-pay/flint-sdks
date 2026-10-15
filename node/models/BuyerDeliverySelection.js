import { d73 as c0, d77 as c1, d78 as c2, d560 as c3, d590 as c4, d600 as c5, d632 as c6, d633 as c7, d689 as c8, d709 as c9, d714 as c10, d724 as c11, d323 as c12 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d77 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d77;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryInputRequirementResource"]:c0(),["BuyerDeliverySelection"]:c1(),["BuyerDeliverySelectionChoiceResource"]:c2(),["DeliveryAddressResource"]:c3(),["DeliveryInputConstraint"]:c4(),["DeliveryLocationSummaryResource"]:c5(),["DeliveryPickupDetails"]:c6(),["DeliveryPlan"]:c7(),["DeliveryRecipientResource"]:c8(),["DeliverySelectionInstructionsRequest"]:c9(),["DeliveryShipmentDetails"]:c10(),["DeliveryWindowResource"]:c11(),["MoneyValue"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerDeliverySelection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
