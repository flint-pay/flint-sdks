import { d558 as c0, d716 as c1, d42 as c2, d745 as c3, d748 as c4, d733 as c5, d759 as c6, d767 as c7, d768 as c8, d775 as c9, d777 as c10, d778 as c11, d314 as c12, d1775 as c13, d1776 as c14, d1829 as c15, d1989 as c16, d66 as c17, d1992 as c18, d2112 as c19, d2113 as c20, d2270 as c21, d2274 as c22, d14 as c23, d92 as c24, d1774 as c25, d1970 as c26, d2331 as c27 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d778 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d778;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFulfillmentDetails"]:c0(),["DigitalFulfillmentDetails"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPackageSummary"]:c3(),["ExpandedShipmentSummary"]:c4(),["Fulfillment"]:c5(),["FulfillmentChargeLink"]:c6(),["FulfillmentHold"]:c7(),["FulfillmentLineItem"]:c8(),["FulfillmentOutcome"]:c9(),["FulfillmentRecipient"]:c10(),["FulfillmentResponse"]:c11(),["MoneyValue"]:c12(),["NextAction"]:c13(),["NextActionMerchantAccountSession"]:c14(),["OrderLineItemModifier"]:c15(),["PickupFulfillmentDetails"]:c16(),["PostalAddress"]:c17(),["PricingAmounts"]:c18(),["ResponseMeta"]:c19(),["ResponseWarning"]:c20(),["ServiceFulfillmentDetails"]:c21(),["SettlementAmounts"]:c22(),["SharedCodec1"]:c23(),["SharedCodec17"]:c24(),["SharedCodec448"]:c25(),["SignedMoney"]:c26(),["TextModifierRequest"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
