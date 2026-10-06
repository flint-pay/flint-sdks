import { d81 as c0, d82 as c1, d83 as c2, d84 as c3, d130 as c4, d584 as c5, d585 as c6, d586 as c7, d587 as c8, d199 as c9, d597 as c10, d612 as c11, d621 as c12, d649 as c13, d650 as c14, d688 as c15, d706 as c16, d731 as c17, d741 as c18, d77 as c19, d197 as c20, d198 as c21 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d83 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d83;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryInputRequirementResource"]:c0(),["BuyerDeliveryOptionResource"]:c1(),["BuyerDeliveryQuote"]:c2(),["BuyerDeliveryQuoteChoiceGroupResource"]:c3(),["BuyerInstructionsConfig"]:c4(),["DeliveryAddressAdvisoryResource"]:c5(),["DeliveryAddressRequest"]:c6(),["DeliveryAddressResource"]:c7(),["DeliveryArrivalEstimate"]:c8(),["DeliveryBuyerLocationResource"]:c9(),["DeliveryCoordinateRequest"]:c10(),["DeliveryInputConstraint"]:c11(),["DeliveryLocationSummaryResource"]:c12(),["DeliveryPickupDetails"]:c13(),["DeliveryPlan"]:c14(),["DeliveryQuoteLineItemResource"]:c15(),["DeliveryRecipientRequirement"]:c16(),["DeliveryShipmentDetails"]:c17(),["DeliveryWindowResource"]:c18(),["MoneyValue"]:c19(),["SharedCodec55"]:c20(),["SharedCodec56"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerDeliveryQuote(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
