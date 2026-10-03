import { d79 as c0, d124 as c1, d570 as c2, d571 as c3, d605 as c4, d634 as c5, d635 as c6, d688 as c7, d713 as c8, d723 as c9, d74 as c10 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d79 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d79;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryOptionResource"]:c0(),["BuyerInstructionsConfig"]:c1(),["DeliveryAddressResource"]:c2(),["DeliveryArrivalEstimate"]:c3(),["DeliveryLocationSummaryResource"]:c4(),["DeliveryPickupDetails"]:c5(),["DeliveryPlan"]:c6(),["DeliveryRecipientRequirement"]:c7(),["DeliveryShipmentDetails"]:c8(),["DeliveryWindowResource"]:c9(),["MoneyValue"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerDeliveryOptionResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
