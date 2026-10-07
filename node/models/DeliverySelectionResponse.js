import { d529 as c0, d537 as c1, d543 as c2, d559 as c3, d561 as c4, d569 as c5, d601 as c6, d602 as c7, d658 as c8, d160 as c9, d677 as c10, d678 as c11, d679 as c12, d681 as c13, d683 as c14, d693 as c15, d314 as c16, d1775 as c17, d1776 as c18, d2112 as c19, d2113 as c20, d14 as c21, d534 as c22, d535 as c23, d560 as c24, d1774 as c25 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d681 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d681;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressResource"]:c0(),["DeliveryBuyerLocationResource"]:c1(),["DeliveryCoordinateRequest"]:c2(),["DeliveryInputConstraint"]:c3(),["DeliveryInputRequirement"]:c4(),["DeliveryLocationSummaryResource"]:c5(),["DeliveryPickupDetails"]:c6(),["DeliveryPlan"]:c7(),["DeliveryRecipientResource"]:c8(),["DeliverySelection"]:c9(),["DeliverySelectionChoiceResource"]:c10(),["DeliverySelectionInstructionsRequest"]:c11(),["DeliverySelectionLifecycleEventResource"]:c12(),["DeliverySelectionResponse"]:c13(),["DeliveryShipmentDetails"]:c14(),["DeliveryWindowResource"]:c15(),["MoneyValue"]:c16(),["NextAction"]:c17(),["NextActionMerchantAccountSession"]:c18(),["ResponseMeta"]:c19(),["ResponseWarning"]:c20(),["SharedCodec1"]:c21(),["SharedCodec167"]:c22(),["SharedCodec168"]:c23(),["SharedCodec171"]:c24(),["SharedCodec448"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliverySelectionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
