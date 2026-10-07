import { d586 as c0, d621 as c1, d654 as c2, d655 as c3, d731 as c4, d732 as c5, d737 as c6, d77 as c7 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d731 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d731;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressResource"]:c0(),["DeliveryLocationSummaryResource"]:c1(),["DeliveryPickupDetails"]:c2(),["DeliveryPlan"]:c3(),["DeliverySelectionChoiceResource"]:c4(),["DeliverySelectionInstructionsRequest"]:c5(),["DeliveryShipmentDetails"]:c6(),["MoneyValue"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliverySelectionChoiceResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
