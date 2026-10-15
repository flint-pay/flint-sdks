import { d560 as c0, d568 as c1, d574 as c2, d590 as c3, d592 as c4, d600 as c5, d632 as c6, d633 as c7, d689 as c8, d164 as c9, d708 as c10, d709 as c11, d710 as c12, d712 as c13, d714 as c14, d724 as c15, d323 as c16, d1823 as c17, d1824 as c18, d2178 as c19, d2179 as c20, d14 as c21, d565 as c22, d566 as c23, d591 as c24, d1822 as c25 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d712 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d712;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressResource"]:c0(),["DeliveryBuyerLocationResource"]:c1(),["DeliveryCoordinateRequest"]:c2(),["DeliveryInputConstraint"]:c3(),["DeliveryInputRequirement"]:c4(),["DeliveryLocationSummaryResource"]:c5(),["DeliveryPickupDetails"]:c6(),["DeliveryPlan"]:c7(),["DeliveryRecipientResource"]:c8(),["DeliverySelection"]:c9(),["DeliverySelectionChoiceResource"]:c10(),["DeliverySelectionInstructionsRequest"]:c11(),["DeliverySelectionLifecycleEventResource"]:c12(),["DeliverySelectionResponse"]:c13(),["DeliveryShipmentDetails"]:c14(),["DeliveryWindowResource"]:c15(),["MoneyValue"]:c16(),["NextAction"]:c17(),["NextActionMerchantAccountSession"]:c18(),["ResponseMeta"]:c19(),["ResponseWarning"]:c20(),["SharedCodec1"]:c21(),["SharedCodec182"]:c22(),["SharedCodec183"]:c23(),["SharedCodec186"]:c24(),["SharedCodec467"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliverySelectionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
