import { d83 as c0, d572 as c1, d607 as c2, d636 as c3, d637 as c4, d710 as c5, d715 as c6, d74 as c7 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d83 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d83;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliverySelectionChoiceResource"]:c0(),["DeliveryAddressResource"]:c1(),["DeliveryLocationSummaryResource"]:c2(),["DeliveryPickupDetails"]:c3(),["DeliveryPlan"]:c4(),["DeliverySelectionInstructionsRequest"]:c5(),["DeliveryShipmentDetails"]:c6(),["MoneyValue"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerDeliverySelectionChoiceResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
