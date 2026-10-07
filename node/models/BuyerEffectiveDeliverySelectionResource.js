import { d81 as c0, d90 as c1, d91 as c2, d127 as c3, d586 as c4, d612 as c5, d621 as c6, d654 as c7, d655 as c8, d89 as c9, d732 as c10, d737 as c11, d747 as c12, d86 as c13, d77 as c14, d126 as c15 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d127 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d127;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryInputRequirementResource"]:c0(),["BuyerDeliverySelection"]:c1(),["BuyerDeliverySelectionChoiceResource"]:c2(),["BuyerEffectiveDeliverySelectionResource"]:c3(),["DeliveryAddressResource"]:c4(),["DeliveryInputConstraint"]:c5(),["DeliveryLocationSummaryResource"]:c6(),["DeliveryPickupDetails"]:c7(),["DeliveryPlan"]:c8(),["DeliveryRecipientResource"]:c9(),["DeliverySelectionInstructionsRequest"]:c10(),["DeliveryShipmentDetails"]:c11(),["DeliveryWindowResource"]:c12(),["LocationAddress"]:c13(),["MoneyValue"]:c14(),["SharedCodec42"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerEffectiveDeliverySelectionResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
