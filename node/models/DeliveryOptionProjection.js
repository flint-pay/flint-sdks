import { d124 as c0, d572 as c1, d573 as c2, d607 as c3, d625 as c4, d636 as c5, d637 as c6, d671 as c7, d690 as c8, d715 as c9, d725 as c10, d74 as c11 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d625 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d625;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerInstructionsConfig"]:c0(),["DeliveryAddressResource"]:c1(),["DeliveryArrivalEstimate"]:c2(),["DeliveryLocationSummaryResource"]:c3(),["DeliveryOptionProjection"]:c4(),["DeliveryPickupDetails"]:c5(),["DeliveryPlan"]:c6(),["DeliveryQuoteExecutionLegResource"]:c7(),["DeliveryRecipientRequirement"]:c8(),["DeliveryShipmentDetails"]:c9(),["DeliveryWindowResource"]:c10(),["MoneyValue"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryOptionProjection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
