import { d78 as c0, d521 as c1, d556 as c2, d585 as c3, d586 as c4, d659 as c5, d664 as c6, d69 as c7 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d78 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d78;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliverySelectionChoiceResource"]:c0(),["DeliveryAddressResource"]:c1(),["DeliveryLocationSummaryResource"]:c2(),["DeliveryPickupDetails"]:c3(),["DeliveryPlan"]:c4(),["DeliverySelectionInstructionsRequest"]:c5(),["DeliveryShipmentDetails"]:c6(),["MoneyValue"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerDeliverySelectionChoiceResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
