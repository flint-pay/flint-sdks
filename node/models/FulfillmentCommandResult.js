import { d558 as c0, d716 as c1, d42 as c2, d745 as c3, d748 as c4, d733 as c5, d759 as c6, d761 as c7, d762 as c8, d767 as c9, d768 as c10, d772 as c11, d775 as c12, d777 as c13, d314 as c14, d1829 as c15, d1989 as c16, d66 as c17, d1992 as c18, d2270 as c19, d2274 as c20, d92 as c21, d771 as c22, d43 as c23, d1970 as c24, d2331 as c25 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d761 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d761;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFulfillmentDetails"]:c0(),["DigitalFulfillmentDetails"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPackageSummary"]:c3(),["ExpandedShipmentSummary"]:c4(),["Fulfillment"]:c5(),["FulfillmentChargeLink"]:c6(),["FulfillmentCommandResult"]:c7(),["FulfillmentEvent"]:c8(),["FulfillmentHold"]:c9(),["FulfillmentLineItem"]:c10(),["FulfillmentNotification"]:c11(),["FulfillmentOutcome"]:c12(),["FulfillmentRecipient"]:c13(),["MoneyValue"]:c14(),["OrderLineItemModifier"]:c15(),["PickupFulfillmentDetails"]:c16(),["PostalAddress"]:c17(),["PricingAmounts"]:c18(),["ServiceFulfillmentDetails"]:c19(),["SettlementAmounts"]:c20(),["SharedCodec17"]:c21(),["SharedCodec218"]:c22(),["SharedCodec5"]:c23(),["SignedMoney"]:c24(),["TextModifierRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentCommandResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
