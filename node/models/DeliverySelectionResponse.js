import { d570 as c0, d193 as c1, d581 as c2, d596 as c3, d598 as c4, d605 as c5, d634 as c6, d635 as c7, d195 as c8, d196 as c9, d707 as c10, d708 as c11, d709 as c12, d711 as c13, d713 as c14, d723 as c15, d194 as c16, d74 as c17, d1784 as c18, d1783 as c19, d2118 as c20, d2119 as c21, d597 as c22, d191 as c23, d192 as c24 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d711 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d711;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressResource"]:c0(),["DeliveryBuyerLocationResource"]:c1(),["DeliveryCoordinateRequest"]:c2(),["DeliveryInputConstraint"]:c3(),["DeliveryInputRequirement"]:c4(),["DeliveryLocationSummaryResource"]:c5(),["DeliveryPickupDetails"]:c6(),["DeliveryPlan"]:c7(),["DeliveryRecipientResource"]:c8(),["DeliverySelection"]:c9(),["DeliverySelectionChoiceResource"]:c10(),["DeliverySelectionInstructionsRequest"]:c11(),["DeliverySelectionLifecycleEventResource"]:c12(),["DeliverySelectionResponse"]:c13(),["DeliveryShipmentDetails"]:c14(),["DeliveryWindowResource"]:c15(),["LocationAddress"]:c16(),["MoneyValue"]:c17(),["NextAction"]:c18(),["NextActionMerchantAccountSession"]:c19(),["ResponseMeta"]:c20(),["ResponseWarning"]:c21(),["SharedCodec203"]:c22(),["SharedCodec55"]:c23(),["SharedCodec56"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliverySelectionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
