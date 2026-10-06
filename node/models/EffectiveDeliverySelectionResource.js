import { d586 as c0, d199 as c1, d597 as c2, d612 as c3, d614 as c4, d621 as c5, d649 as c6, d650 as c7, d201 as c8, d202 as c9, d725 as c10, d726 as c11, d727 as c12, d731 as c13, d741 as c14, d775 as c15, d200 as c16, d77 as c17, d613 as c18, d203 as c19, d197 as c20, d198 as c21 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d775 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d775;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressResource"]:c0(),["DeliveryBuyerLocationResource"]:c1(),["DeliveryCoordinateRequest"]:c2(),["DeliveryInputConstraint"]:c3(),["DeliveryInputRequirement"]:c4(),["DeliveryLocationSummaryResource"]:c5(),["DeliveryPickupDetails"]:c6(),["DeliveryPlan"]:c7(),["DeliveryRecipientResource"]:c8(),["DeliverySelection"]:c9(),["DeliverySelectionChoiceResource"]:c10(),["DeliverySelectionInstructionsRequest"]:c11(),["DeliverySelectionLifecycleEventResource"]:c12(),["DeliveryShipmentDetails"]:c13(),["DeliveryWindowResource"]:c14(),["EffectiveDeliverySelectionResource"]:c15(),["LocationAddress"]:c16(),["MoneyValue"]:c17(),["SharedCodec207"]:c18(),["SharedCodec54"]:c19(),["SharedCodec55"]:c20(),["SharedCodec56"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeEffectiveDeliverySelectionResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
