import { d74 as c0, d89 as c1, d560 as c2, d561 as c3, d600 as c4, d632 as c5, d633 as c6, d688 as c7, d714 as c8, d724 as c9, d323 as c10 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d74 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d74;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryOptionResource"]:c0(),["BuyerInstructionsConfig"]:c1(),["DeliveryAddressResource"]:c2(),["DeliveryArrivalEstimate"]:c3(),["DeliveryLocationSummaryResource"]:c4(),["DeliveryPickupDetails"]:c5(),["DeliveryPlan"]:c6(),["DeliveryRecipientRequirement"]:c7(),["DeliveryShipmentDetails"]:c8(),["DeliveryWindowResource"]:c9(),["MoneyValue"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerDeliveryOptionResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
