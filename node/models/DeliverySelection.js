import { d586 as c0, d199 as c1, d597 as c2, d612 as c3, d614 as c4, d621 as c5, d649 as c6, d650 as c7, d201 as c8, d202 as c9, d725 as c10, d726 as c11, d727 as c12, d731 as c13, d741 as c14, d200 as c15, d77 as c16, d613 as c17, d197 as c18, d198 as c19 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d202 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d202;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressResource"]:c0(),["DeliveryBuyerLocationResource"]:c1(),["DeliveryCoordinateRequest"]:c2(),["DeliveryInputConstraint"]:c3(),["DeliveryInputRequirement"]:c4(),["DeliveryLocationSummaryResource"]:c5(),["DeliveryPickupDetails"]:c6(),["DeliveryPlan"]:c7(),["DeliveryRecipientResource"]:c8(),["DeliverySelection"]:c9(),["DeliverySelectionChoiceResource"]:c10(),["DeliverySelectionInstructionsRequest"]:c11(),["DeliverySelectionLifecycleEventResource"]:c12(),["DeliveryShipmentDetails"]:c13(),["DeliveryWindowResource"]:c14(),["LocationAddress"]:c15(),["MoneyValue"]:c16(),["SharedCodec207"]:c17(),["SharedCodec55"]:c18(),["SharedCodec56"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliverySelection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
