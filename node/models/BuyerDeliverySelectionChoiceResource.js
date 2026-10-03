import { d83 as c0, d570 as c1, d605 as c2, d634 as c3, d635 as c4, d708 as c5, d713 as c6, d74 as c7 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d83 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d83;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliverySelectionChoiceResource"]:c0(),["DeliveryAddressResource"]:c1(),["DeliveryLocationSummaryResource"]:c2(),["DeliveryPickupDetails"]:c3(),["DeliveryPlan"]:c4(),["DeliverySelectionInstructionsRequest"]:c5(),["DeliveryShipmentDetails"]:c6(),["MoneyValue"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerDeliverySelectionChoiceResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
