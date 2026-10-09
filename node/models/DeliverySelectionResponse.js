import { d550 as c0, d558 as c1, d564 as c2, d580 as c3, d582 as c4, d590 as c5, d622 as c6, d623 as c7, d679 as c8, d164 as c9, d698 as c10, d699 as c11, d700 as c12, d702 as c13, d704 as c14, d714 as c15, d323 as c16, d1820 as c17, d1821 as c18, d2162 as c19, d2163 as c20, d14 as c21, d555 as c22, d556 as c23, d581 as c24, d1819 as c25 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d702 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d702;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressResource"]:c0(),["DeliveryBuyerLocationResource"]:c1(),["DeliveryCoordinateRequest"]:c2(),["DeliveryInputConstraint"]:c3(),["DeliveryInputRequirement"]:c4(),["DeliveryLocationSummaryResource"]:c5(),["DeliveryPickupDetails"]:c6(),["DeliveryPlan"]:c7(),["DeliveryRecipientResource"]:c8(),["DeliverySelection"]:c9(),["DeliverySelectionChoiceResource"]:c10(),["DeliverySelectionInstructionsRequest"]:c11(),["DeliverySelectionLifecycleEventResource"]:c12(),["DeliverySelectionResponse"]:c13(),["DeliveryShipmentDetails"]:c14(),["DeliveryWindowResource"]:c15(),["MoneyValue"]:c16(),["NextAction"]:c17(),["NextActionMerchantAccountSession"]:c18(),["ResponseMeta"]:c19(),["ResponseWarning"]:c20(),["SharedCodec1"]:c21(),["SharedCodec176"]:c22(),["SharedCodec177"]:c23(),["SharedCodec180"]:c24(),["SharedCodec466"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliverySelectionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
