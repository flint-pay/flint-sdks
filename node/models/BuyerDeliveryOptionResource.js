import { d74 as c0, d89 as c1, d550 as c2, d551 as c3, d590 as c4, d622 as c5, d623 as c6, d678 as c7, d704 as c8, d714 as c9, d323 as c10 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d74 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d74;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryOptionResource"]:c0(),["BuyerInstructionsConfig"]:c1(),["DeliveryAddressResource"]:c2(),["DeliveryArrivalEstimate"]:c3(),["DeliveryLocationSummaryResource"]:c4(),["DeliveryPickupDetails"]:c5(),["DeliveryPlan"]:c6(),["DeliveryRecipientRequirement"]:c7(),["DeliveryShipmentDetails"]:c8(),["DeliveryWindowResource"]:c9(),["MoneyValue"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerDeliveryOptionResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
