import { d73 as c0, d74 as c1, d76 as c2, d89 as c3, d158 as c4, d527 as c5, d528 as c6, d529 as c7, d530 as c8, d559 as c9, d569 as c10, d601 as c11, d602 as c12, d638 as c13, d657 as c14, d683 as c15, d693 as c16, d314 as c17 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d158 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d158;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryInputRequirementResource"]:c0(),["BuyerDeliveryOptionResource"]:c1(),["BuyerDeliveryQuoteChoiceGroupResource"]:c2(),["BuyerInstructionsConfig"]:c3(),["CheckoutDerivedDeliveryResource"]:c4(),["DeliveryAddressAdvisoryResource"]:c5(),["DeliveryAddressRequest"]:c6(),["DeliveryAddressResource"]:c7(),["DeliveryArrivalEstimate"]:c8(),["DeliveryInputConstraint"]:c9(),["DeliveryLocationSummaryResource"]:c10(),["DeliveryPickupDetails"]:c11(),["DeliveryPlan"]:c12(),["DeliveryQuoteLineItemResource"]:c13(),["DeliveryRecipientRequirement"]:c14(),["DeliveryShipmentDetails"]:c15(),["DeliveryWindowResource"]:c16(),["MoneyValue"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutDerivedDeliveryResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
