import { d73 as c0, d77 as c1, d78 as c2, d112 as c3, d521 as c4, d547 as c5, d556 as c6, d585 as c7, d586 as c8, d178 as c9, d659 as c10, d664 as c11, d674 as c12, d69 as c13, d111 as c14 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d112 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d112;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryInputRequirementResource"]:c0(),["BuyerDeliverySelection"]:c1(),["BuyerDeliverySelectionChoiceResource"]:c2(),["BuyerEffectiveDeliverySelectionResource"]:c3(),["DeliveryAddressResource"]:c4(),["DeliveryInputConstraint"]:c5(),["DeliveryLocationSummaryResource"]:c6(),["DeliveryPickupDetails"]:c7(),["DeliveryPlan"]:c8(),["DeliveryRecipientResource"]:c9(),["DeliverySelectionInstructionsRequest"]:c10(),["DeliveryShipmentDetails"]:c11(),["DeliveryWindowResource"]:c12(),["MoneyValue"]:c13(),["SharedCodec37"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerEffectiveDeliverySelectionResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
