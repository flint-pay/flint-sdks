import { d586 as c0, d199 as c1, d597 as c2, d612 as c3, d614 as c4, d621 as c5, d649 as c6, d650 as c7, d201 as c8, d202 as c9, d725 as c10, d726 as c11, d727 as c12, d729 as c13, d731 as c14, d741 as c15, d200 as c16, d77 as c17, d1823 as c18, d1822 as c19, d2157 as c20, d2158 as c21, d14 as c22, d613 as c23, d1821 as c24, d197 as c25, d198 as c26 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d729 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d729;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressResource"]:c0(),["DeliveryBuyerLocationResource"]:c1(),["DeliveryCoordinateRequest"]:c2(),["DeliveryInputConstraint"]:c3(),["DeliveryInputRequirement"]:c4(),["DeliveryLocationSummaryResource"]:c5(),["DeliveryPickupDetails"]:c6(),["DeliveryPlan"]:c7(),["DeliveryRecipientResource"]:c8(),["DeliverySelection"]:c9(),["DeliverySelectionChoiceResource"]:c10(),["DeliverySelectionInstructionsRequest"]:c11(),["DeliverySelectionLifecycleEventResource"]:c12(),["DeliverySelectionResponse"]:c13(),["DeliveryShipmentDetails"]:c14(),["DeliveryWindowResource"]:c15(),["LocationAddress"]:c16(),["MoneyValue"]:c17(),["NextAction"]:c18(),["NextActionMerchantAccountSession"]:c19(),["ResponseMeta"]:c20(),["ResponseWarning"]:c21(),["SharedCodec1"]:c22(),["SharedCodec207"]:c23(),["SharedCodec487"]:c24(),["SharedCodec55"]:c25(),["SharedCodec56"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliverySelectionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
