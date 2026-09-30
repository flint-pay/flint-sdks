import { d113 as c0, d521 as c1, d522 as c2, d556 as c3, d574 as c4, d585 as c5, d586 as c6, d620 as c7, d639 as c8, d664 as c9, d674 as c10, d69 as c11 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d574 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d574;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerInstructionsConfig"]:c0(),["DeliveryAddressResource"]:c1(),["DeliveryArrivalEstimate"]:c2(),["DeliveryLocationSummaryResource"]:c3(),["DeliveryOptionProjection"]:c4(),["DeliveryPickupDetails"]:c5(),["DeliveryPlan"]:c6(),["DeliveryQuoteExecutionLegResource"]:c7(),["DeliveryRecipientRequirement"]:c8(),["DeliveryShipmentDetails"]:c9(),["DeliveryWindowResource"]:c10(),["MoneyValue"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryOptionProjection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
