import { d74 as c0, d113 as c1, d521 as c2, d522 as c3, d556 as c4, d585 as c5, d586 as c6, d639 as c7, d664 as c8, d674 as c9, d69 as c10 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d74 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d74;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryOptionResource"]:c0(),["BuyerInstructionsConfig"]:c1(),["DeliveryAddressResource"]:c2(),["DeliveryArrivalEstimate"]:c3(),["DeliveryLocationSummaryResource"]:c4(),["DeliveryPickupDetails"]:c5(),["DeliveryPlan"]:c6(),["DeliveryRecipientRequirement"]:c7(),["DeliveryShipmentDetails"]:c8(),["DeliveryWindowResource"]:c9(),["MoneyValue"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerDeliveryOptionResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
