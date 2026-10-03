import { d570 as c0, d193 as c1, d581 as c2, d596 as c3, d598 as c4, d605 as c5, d634 as c6, d635 as c7, d195 as c8, d196 as c9, d707 as c10, d708 as c11, d709 as c12, d713 as c13, d723 as c14, d758 as c15, d194 as c16, d74 as c17, d597 as c18, d197 as c19, d191 as c20, d192 as c21 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d758 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d758;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressResource"]:c0(),["DeliveryBuyerLocationResource"]:c1(),["DeliveryCoordinateRequest"]:c2(),["DeliveryInputConstraint"]:c3(),["DeliveryInputRequirement"]:c4(),["DeliveryLocationSummaryResource"]:c5(),["DeliveryPickupDetails"]:c6(),["DeliveryPlan"]:c7(),["DeliveryRecipientResource"]:c8(),["DeliverySelection"]:c9(),["DeliverySelectionChoiceResource"]:c10(),["DeliverySelectionInstructionsRequest"]:c11(),["DeliverySelectionLifecycleEventResource"]:c12(),["DeliveryShipmentDetails"]:c13(),["DeliveryWindowResource"]:c14(),["EffectiveDeliverySelectionResource"]:c15(),["LocationAddress"]:c16(),["MoneyValue"]:c17(),["SharedCodec203"]:c18(),["SharedCodec54"]:c19(),["SharedCodec55"]:c20(),["SharedCodec56"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeEffectiveDeliverySelectionResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
