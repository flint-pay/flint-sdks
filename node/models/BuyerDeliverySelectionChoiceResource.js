import { d78 as c0, d550 as c1, d590 as c2, d622 as c3, d623 as c4, d699 as c5, d704 as c6, d323 as c7 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d78 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d78;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliverySelectionChoiceResource"]:c0(),["DeliveryAddressResource"]:c1(),["DeliveryLocationSummaryResource"]:c2(),["DeliveryPickupDetails"]:c3(),["DeliveryPlan"]:c4(),["DeliverySelectionInstructionsRequest"]:c5(),["DeliveryShipmentDetails"]:c6(),["MoneyValue"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerDeliverySelectionChoiceResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
