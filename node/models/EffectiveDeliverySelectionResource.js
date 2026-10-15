import { d560 as c0, d568 as c1, d574 as c2, d590 as c3, d592 as c4, d600 as c5, d632 as c6, d633 as c7, d689 as c8, d164 as c9, d708 as c10, d709 as c11, d710 as c12, d714 as c13, d724 as c14, d758 as c15, d323 as c16, d565 as c17, d566 as c18, d591 as c19, d165 as c20 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d758 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d758;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressResource"]:c0(),["DeliveryBuyerLocationResource"]:c1(),["DeliveryCoordinateRequest"]:c2(),["DeliveryInputConstraint"]:c3(),["DeliveryInputRequirement"]:c4(),["DeliveryLocationSummaryResource"]:c5(),["DeliveryPickupDetails"]:c6(),["DeliveryPlan"]:c7(),["DeliveryRecipientResource"]:c8(),["DeliverySelection"]:c9(),["DeliverySelectionChoiceResource"]:c10(),["DeliverySelectionInstructionsRequest"]:c11(),["DeliverySelectionLifecycleEventResource"]:c12(),["DeliveryShipmentDetails"]:c13(),["DeliveryWindowResource"]:c14(),["EffectiveDeliverySelectionResource"]:c15(),["MoneyValue"]:c16(),["SharedCodec182"]:c17(),["SharedCodec183"]:c18(),["SharedCodec186"]:c19(),["SharedCodec28"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeEffectiveDeliverySelectionResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
