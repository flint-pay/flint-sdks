import { d81 as c0, d82 as c1, d84 as c2, d130 as c3, d94 as c4, d584 as c5, d585 as c6, d586 as c7, d587 as c8, d612 as c9, d621 as c10, d649 as c11, d650 as c12, d688 as c13, d706 as c14, d731 as c15, d741 as c16, d77 as c17 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d94 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d94;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryInputRequirementResource"]:c0(),["BuyerDeliveryOptionResource"]:c1(),["BuyerDeliveryQuoteChoiceGroupResource"]:c2(),["BuyerInstructionsConfig"]:c3(),["CheckoutDerivedDeliveryResource"]:c4(),["DeliveryAddressAdvisoryResource"]:c5(),["DeliveryAddressRequest"]:c6(),["DeliveryAddressResource"]:c7(),["DeliveryArrivalEstimate"]:c8(),["DeliveryInputConstraint"]:c9(),["DeliveryLocationSummaryResource"]:c10(),["DeliveryPickupDetails"]:c11(),["DeliveryPlan"]:c12(),["DeliveryQuoteLineItemResource"]:c13(),["DeliveryRecipientRequirement"]:c14(),["DeliveryShipmentDetails"]:c15(),["DeliveryWindowResource"]:c16(),["MoneyValue"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutDerivedDeliveryResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
