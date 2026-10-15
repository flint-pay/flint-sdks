import { d73 as c0, d77 as c1, d78 as c2, d81 as c3, d560 as c4, d590 as c5, d600 as c6, d632 as c7, d633 as c8, d689 as c9, d709 as c10, d714 as c11, d724 as c12, d323 as c13, d80 as c14 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d81 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d81;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryInputRequirementResource"]:c0(),["BuyerDeliverySelection"]:c1(),["BuyerDeliverySelectionChoiceResource"]:c2(),["BuyerEffectiveDeliverySelectionResource"]:c3(),["DeliveryAddressResource"]:c4(),["DeliveryInputConstraint"]:c5(),["DeliveryLocationSummaryResource"]:c6(),["DeliveryPickupDetails"]:c7(),["DeliveryPlan"]:c8(),["DeliveryRecipientResource"]:c9(),["DeliverySelectionInstructionsRequest"]:c10(),["DeliveryShipmentDetails"]:c11(),["DeliveryWindowResource"]:c12(),["MoneyValue"]:c13(),["SharedCodec15"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerEffectiveDeliverySelectionResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
