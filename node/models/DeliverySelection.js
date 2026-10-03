import { d572 as c0, d195 as c1, d583 as c2, d598 as c3, d600 as c4, d607 as c5, d636 as c6, d637 as c7, d197 as c8, d198 as c9, d709 as c10, d710 as c11, d711 as c12, d715 as c13, d725 as c14, d196 as c15, d74 as c16, d599 as c17, d193 as c18, d194 as c19 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d198 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d198;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressResource"]:c0(),["DeliveryBuyerLocationResource"]:c1(),["DeliveryCoordinateRequest"]:c2(),["DeliveryInputConstraint"]:c3(),["DeliveryInputRequirement"]:c4(),["DeliveryLocationSummaryResource"]:c5(),["DeliveryPickupDetails"]:c6(),["DeliveryPlan"]:c7(),["DeliveryRecipientResource"]:c8(),["DeliverySelection"]:c9(),["DeliverySelectionChoiceResource"]:c10(),["DeliverySelectionInstructionsRequest"]:c11(),["DeliverySelectionLifecycleEventResource"]:c12(),["DeliveryShipmentDetails"]:c13(),["DeliveryWindowResource"]:c14(),["LocationAddress"]:c15(),["MoneyValue"]:c16(),["SharedCodec203"]:c17(),["SharedCodec55"]:c18(),["SharedCodec56"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliverySelection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
