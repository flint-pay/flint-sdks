import { d73 as c0, d74 as c1, d75 as c2, d76 as c3, d89 as c4, d527 as c5, d528 as c6, d529 as c7, d530 as c8, d537 as c9, d543 as c10, d559 as c11, d569 as c12, d601 as c13, d602 as c14, d638 as c15, d657 as c16, d683 as c17, d693 as c18, d314 as c19, d534 as c20, d535 as c21 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d75 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d75;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryInputRequirementResource"]:c0(),["BuyerDeliveryOptionResource"]:c1(),["BuyerDeliveryQuote"]:c2(),["BuyerDeliveryQuoteChoiceGroupResource"]:c3(),["BuyerInstructionsConfig"]:c4(),["DeliveryAddressAdvisoryResource"]:c5(),["DeliveryAddressRequest"]:c6(),["DeliveryAddressResource"]:c7(),["DeliveryArrivalEstimate"]:c8(),["DeliveryBuyerLocationResource"]:c9(),["DeliveryCoordinateRequest"]:c10(),["DeliveryInputConstraint"]:c11(),["DeliveryLocationSummaryResource"]:c12(),["DeliveryPickupDetails"]:c13(),["DeliveryPlan"]:c14(),["DeliveryQuoteLineItemResource"]:c15(),["DeliveryRecipientRequirement"]:c16(),["DeliveryShipmentDetails"]:c17(),["DeliveryWindowResource"]:c18(),["MoneyValue"]:c19(),["SharedCodec167"]:c20(),["SharedCodec168"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerDeliveryQuote(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
