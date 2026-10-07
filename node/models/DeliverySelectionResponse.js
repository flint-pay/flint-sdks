import { d586 as c0, d85 as c1, d597 as c2, d612 as c3, d614 as c4, d621 as c5, d654 as c6, d655 as c7, d89 as c8, d203 as c9, d731 as c10, d732 as c11, d733 as c12, d735 as c13, d737 as c14, d747 as c15, d86 as c16, d77 as c17, d1830 as c18, d1829 as c19, d2164 as c20, d2165 as c21, d14 as c22, d83 as c23, d613 as c24, d84 as c25, d1828 as c26 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d735 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d735;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressResource"]:c0(),["DeliveryBuyerLocationResource"]:c1(),["DeliveryCoordinateRequest"]:c2(),["DeliveryInputConstraint"]:c3(),["DeliveryInputRequirement"]:c4(),["DeliveryLocationSummaryResource"]:c5(),["DeliveryPickupDetails"]:c6(),["DeliveryPlan"]:c7(),["DeliveryRecipientResource"]:c8(),["DeliverySelection"]:c9(),["DeliverySelectionChoiceResource"]:c10(),["DeliverySelectionInstructionsRequest"]:c11(),["DeliverySelectionLifecycleEventResource"]:c12(),["DeliverySelectionResponse"]:c13(),["DeliveryShipmentDetails"]:c14(),["DeliveryWindowResource"]:c15(),["LocationAddress"]:c16(),["MoneyValue"]:c17(),["NextAction"]:c18(),["NextActionMerchantAccountSession"]:c19(),["ResponseMeta"]:c20(),["ResponseWarning"]:c21(),["SharedCodec1"]:c22(),["SharedCodec20"]:c23(),["SharedCodec207"]:c24(),["SharedCodec21"]:c25(),["SharedCodec492"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliverySelectionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
