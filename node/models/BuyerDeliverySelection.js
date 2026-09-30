import { d73 as c0, d77 as c1, d78 as c2, d521 as c3, d547 as c4, d556 as c5, d585 as c6, d586 as c7, d178 as c8, d659 as c9, d664 as c10, d674 as c11, d69 as c12 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d77 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d77;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryInputRequirementResource"]:c0(),["BuyerDeliverySelection"]:c1(),["BuyerDeliverySelectionChoiceResource"]:c2(),["DeliveryAddressResource"]:c3(),["DeliveryInputConstraint"]:c4(),["DeliveryLocationSummaryResource"]:c5(),["DeliveryPickupDetails"]:c6(),["DeliveryPlan"]:c7(),["DeliveryRecipientResource"]:c8(),["DeliverySelectionInstructionsRequest"]:c9(),["DeliveryShipmentDetails"]:c10(),["DeliveryWindowResource"]:c11(),["MoneyValue"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerDeliverySelection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
