import { d73 as c0, d74 as c1, d76 as c2, d113 as c3, d519 as c4, d520 as c5, d521 as c6, d522 as c7, d547 as c8, d556 as c9, d585 as c10, d586 as c11, d621 as c12, d639 as c13, d664 as c14, d674 as c15, d69 as c16 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d76 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d76;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerDeliveryInputRequirementResource"]:c0(),["BuyerDeliveryOptionResource"]:c1(),["BuyerDeliveryQuoteChoiceGroupResource"]:c2(),["BuyerInstructionsConfig"]:c3(),["DeliveryAddressAdvisoryResource"]:c4(),["DeliveryAddressRequest"]:c5(),["DeliveryAddressResource"]:c6(),["DeliveryArrivalEstimate"]:c7(),["DeliveryInputConstraint"]:c8(),["DeliveryLocationSummaryResource"]:c9(),["DeliveryPickupDetails"]:c10(),["DeliveryPlan"]:c11(),["DeliveryQuoteLineItemResource"]:c12(),["DeliveryRecipientRequirement"]:c13(),["DeliveryShipmentDetails"]:c14(),["DeliveryWindowResource"]:c15(),["MoneyValue"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerDeliveryQuoteChoiceGroupResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
