import { d81 as c0, d82 as c1, d88 as c2, d135 as c3, d585 as c4, d194 as c5, d586 as c6, d587 as c7, d612 as c8, d621 as c9, d654 as c10, d655 as c11, d693 as c12, d712 as c13, d737 as c14, d747 as c15, d77 as c16 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d88 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d88;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryInputRequirementResource"]:c0(),["BuyerDeliveryOptionResource"]:c1(),["BuyerDeliveryQuoteChoiceGroupResource"]:c2(),["BuyerInstructionsConfig"]:c3(),["DeliveryAddressAdvisoryResource"]:c4(),["DeliveryAddressRequest"]:c5(),["DeliveryAddressResource"]:c6(),["DeliveryArrivalEstimate"]:c7(),["DeliveryInputConstraint"]:c8(),["DeliveryLocationSummaryResource"]:c9(),["DeliveryPickupDetails"]:c10(),["DeliveryPlan"]:c11(),["DeliveryQuoteLineItemResource"]:c12(),["DeliveryRecipientRequirement"]:c13(),["DeliveryShipmentDetails"]:c14(),["DeliveryWindowResource"]:c15(),["MoneyValue"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerDeliveryQuoteChoiceGroupResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
