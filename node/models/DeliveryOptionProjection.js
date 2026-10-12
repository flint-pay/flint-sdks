import { d89 as c0, d550 as c1, d551 as c2, d590 as c3, d612 as c4, d622 as c5, d623 as c6, d658 as c7, d678 as c8, d704 as c9, d714 as c10, d323 as c11 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d612 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d612;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerInstructionsConfig"]:c0(),["DeliveryAddressResource"]:c1(),["DeliveryArrivalEstimate"]:c2(),["DeliveryLocationSummaryResource"]:c3(),["DeliveryOptionProjection"]:c4(),["DeliveryPickupDetails"]:c5(),["DeliveryPlan"]:c6(),["DeliveryQuoteExecutionLegResource"]:c7(),["DeliveryRecipientRequirement"]:c8(),["DeliveryShipmentDetails"]:c9(),["DeliveryWindowResource"]:c10(),["MoneyValue"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryOptionProjection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
