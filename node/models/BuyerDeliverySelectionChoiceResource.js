import { d78 as c0, d529 as c1, d569 as c2, d601 as c3, d602 as c4, d678 as c5, d683 as c6, d314 as c7 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d78 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d78;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliverySelectionChoiceResource"]:c0(),["DeliveryAddressResource"]:c1(),["DeliveryLocationSummaryResource"]:c2(),["DeliveryPickupDetails"]:c3(),["DeliveryPlan"]:c4(),["DeliverySelectionInstructionsRequest"]:c5(),["DeliveryShipmentDetails"]:c6(),["MoneyValue"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerDeliverySelectionChoiceResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
