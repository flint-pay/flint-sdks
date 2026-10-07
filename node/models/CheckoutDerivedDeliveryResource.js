import { d81 as c0, d82 as c1, d88 as c2, d135 as c3, d99 as c4, d585 as c5, d194 as c6, d586 as c7, d587 as c8, d612 as c9, d621 as c10, d654 as c11, d655 as c12, d693 as c13, d712 as c14, d737 as c15, d747 as c16, d77 as c17 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d99 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d99;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryInputRequirementResource"]:c0(),["BuyerDeliveryOptionResource"]:c1(),["BuyerDeliveryQuoteChoiceGroupResource"]:c2(),["BuyerInstructionsConfig"]:c3(),["CheckoutDerivedDeliveryResource"]:c4(),["DeliveryAddressAdvisoryResource"]:c5(),["DeliveryAddressRequest"]:c6(),["DeliveryAddressResource"]:c7(),["DeliveryArrivalEstimate"]:c8(),["DeliveryInputConstraint"]:c9(),["DeliveryLocationSummaryResource"]:c10(),["DeliveryPickupDetails"]:c11(),["DeliveryPlan"]:c12(),["DeliveryQuoteLineItemResource"]:c13(),["DeliveryRecipientRequirement"]:c14(),["DeliveryShipmentDetails"]:c15(),["DeliveryWindowResource"]:c16(),["MoneyValue"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutDerivedDeliveryResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
