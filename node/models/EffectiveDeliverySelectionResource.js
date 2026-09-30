import { d521 as c0, d176 as c1, d532 as c2, d547 as c3, d549 as c4, d556 as c5, d585 as c6, d586 as c7, d178 as c8, d179 as c9, d658 as c10, d659 as c11, d660 as c12, d664 as c13, d674 as c14, d710 as c15, d177 as c16, d69 as c17, d548 as c18, d180 as c19, d174 as c20, d175 as c21 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d710 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d710;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressResource"]:c0(),["DeliveryBuyerLocationResource"]:c1(),["DeliveryCoordinateRequest"]:c2(),["DeliveryInputConstraint"]:c3(),["DeliveryInputRequirement"]:c4(),["DeliveryLocationSummaryResource"]:c5(),["DeliveryPickupDetails"]:c6(),["DeliveryPlan"]:c7(),["DeliveryRecipientResource"]:c8(),["DeliverySelection"]:c9(),["DeliverySelectionChoiceResource"]:c10(),["DeliverySelectionInstructionsRequest"]:c11(),["DeliverySelectionLifecycleEventResource"]:c12(),["DeliveryShipmentDetails"]:c13(),["DeliveryWindowResource"]:c14(),["EffectiveDeliverySelectionResource"]:c15(),["LocationAddress"]:c16(),["MoneyValue"]:c17(),["SharedCodec182"]:c18(),["SharedCodec51"]:c19(),["SharedCodec52"]:c20(),["SharedCodec53"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeEffectiveDeliverySelectionResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
