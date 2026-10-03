import { d572 as c0, d195 as c1, d583 as c2, d598 as c3, d600 as c4, d607 as c5, d636 as c6, d637 as c7, d197 as c8, d198 as c9, d709 as c10, d710 as c11, d711 as c12, d713 as c13, d715 as c14, d725 as c15, d196 as c16, d74 as c17, d1786 as c18, d1785 as c19, d2121 as c20, d2122 as c21, d599 as c22, d193 as c23, d194 as c24 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d713 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d713;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressResource"]:c0(),["DeliveryBuyerLocationResource"]:c1(),["DeliveryCoordinateRequest"]:c2(),["DeliveryInputConstraint"]:c3(),["DeliveryInputRequirement"]:c4(),["DeliveryLocationSummaryResource"]:c5(),["DeliveryPickupDetails"]:c6(),["DeliveryPlan"]:c7(),["DeliveryRecipientResource"]:c8(),["DeliverySelection"]:c9(),["DeliverySelectionChoiceResource"]:c10(),["DeliverySelectionInstructionsRequest"]:c11(),["DeliverySelectionLifecycleEventResource"]:c12(),["DeliverySelectionResponse"]:c13(),["DeliveryShipmentDetails"]:c14(),["DeliveryWindowResource"]:c15(),["LocationAddress"]:c16(),["MoneyValue"]:c17(),["NextAction"]:c18(),["NextActionMerchantAccountSession"]:c19(),["ResponseMeta"]:c20(),["ResponseWarning"]:c21(),["SharedCodec203"]:c22(),["SharedCodec55"]:c23(),["SharedCodec56"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliverySelectionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
