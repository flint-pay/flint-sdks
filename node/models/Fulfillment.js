import { d558 as c0, d716 as c1, d42 as c2, d745 as c3, d748 as c4, d733 as c5, d759 as c6, d767 as c7, d768 as c8, d775 as c9, d777 as c10, d314 as c11, d1829 as c12, d1989 as c13, d66 as c14, d1992 as c15, d2270 as c16, d2274 as c17, d92 as c18, d1970 as c19, d2331 as c20 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d733 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d733;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFulfillmentDetails"]:c0(),["DigitalFulfillmentDetails"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPackageSummary"]:c3(),["ExpandedShipmentSummary"]:c4(),["Fulfillment"]:c5(),["FulfillmentChargeLink"]:c6(),["FulfillmentHold"]:c7(),["FulfillmentLineItem"]:c8(),["FulfillmentOutcome"]:c9(),["FulfillmentRecipient"]:c10(),["MoneyValue"]:c11(),["OrderLineItemModifier"]:c12(),["PickupFulfillmentDetails"]:c13(),["PostalAddress"]:c14(),["PricingAmounts"]:c15(),["ServiceFulfillmentDetails"]:c16(),["SettlementAmounts"]:c17(),["SharedCodec17"]:c18(),["SignedMoney"]:c19(),["TextModifierRequest"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
