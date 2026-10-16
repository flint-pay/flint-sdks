import { d73 as c0, d74 as c1, d76 as c2, d89 as c3, d558 as c4, d559 as c5, d560 as c6, d561 as c7, d590 as c8, d600 as c9, d632 as c10, d633 as c11, d669 as c12, d688 as c13, d714 as c14, d724 as c15, d323 as c16 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d76 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d76;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryInputRequirementResource"]:c0(),["BuyerDeliveryOptionResource"]:c1(),["BuyerDeliveryQuoteChoiceGroupResource"]:c2(),["BuyerInstructionsConfig"]:c3(),["DeliveryAddressAdvisoryResource"]:c4(),["DeliveryAddressRequest"]:c5(),["DeliveryAddressResource"]:c6(),["DeliveryArrivalEstimate"]:c7(),["DeliveryInputConstraint"]:c8(),["DeliveryLocationSummaryResource"]:c9(),["DeliveryPickupDetails"]:c10(),["DeliveryPlan"]:c11(),["DeliveryQuoteLineItemResource"]:c12(),["DeliveryRecipientRequirement"]:c13(),["DeliveryShipmentDetails"]:c14(),["DeliveryWindowResource"]:c15(),["MoneyValue"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerDeliveryQuoteChoiceGroupResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
