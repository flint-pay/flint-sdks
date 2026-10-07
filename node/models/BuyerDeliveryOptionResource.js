import { d82 as c0, d135 as c1, d586 as c2, d587 as c3, d621 as c4, d654 as c5, d655 as c6, d712 as c7, d737 as c8, d747 as c9, d77 as c10 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d82 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d82;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryOptionResource"]:c0(),["BuyerInstructionsConfig"]:c1(),["DeliveryAddressResource"]:c2(),["DeliveryArrivalEstimate"]:c3(),["DeliveryLocationSummaryResource"]:c4(),["DeliveryPickupDetails"]:c5(),["DeliveryPlan"]:c6(),["DeliveryRecipientRequirement"]:c7(),["DeliveryShipmentDetails"]:c8(),["DeliveryWindowResource"]:c9(),["MoneyValue"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerDeliveryOptionResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
