import { d586 as c0, d85 as c1, d597 as c2, d612 as c3, d614 as c4, d621 as c5, d654 as c6, d655 as c7, d89 as c8, d203 as c9, d731 as c10, d732 as c11, d733 as c12, d737 as c13, d747 as c14, d86 as c15, d77 as c16, d83 as c17, d613 as c18, d84 as c19 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d203 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d203;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressResource"]:c0(),["DeliveryBuyerLocationResource"]:c1(),["DeliveryCoordinateRequest"]:c2(),["DeliveryInputConstraint"]:c3(),["DeliveryInputRequirement"]:c4(),["DeliveryLocationSummaryResource"]:c5(),["DeliveryPickupDetails"]:c6(),["DeliveryPlan"]:c7(),["DeliveryRecipientResource"]:c8(),["DeliverySelection"]:c9(),["DeliverySelectionChoiceResource"]:c10(),["DeliverySelectionInstructionsRequest"]:c11(),["DeliverySelectionLifecycleEventResource"]:c12(),["DeliveryShipmentDetails"]:c13(),["DeliveryWindowResource"]:c14(),["LocationAddress"]:c15(),["MoneyValue"]:c16(),["SharedCodec20"]:c17(),["SharedCodec207"]:c18(),["SharedCodec21"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliverySelection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
