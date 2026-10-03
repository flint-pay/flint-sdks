import { d595 as c0, d747 as c1, d42 as c2, d777 as c3, d780 as c4, d764 as c5, d789 as c6, d791 as c7, d792 as c8, d798 as c9, d802 as c10, d806 as c11, d74 as c12, d1833 as c13, d1990 as c14, d70 as c15, d1993 as c16, d2274 as c17, d2280 as c18, d762 as c19, d763 as c20, d801 as c21, d96 as c22, d43 as c23, d1804 as c24, d2339 as c25 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d791 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d791;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFulfillmentDetails"]:c0(),["DigitalFulfillmentDetails"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPackageSummary"]:c3(),["ExpandedShipmentSummary"]:c4(),["Fulfillment"]:c5(),["FulfillmentChargeLink"]:c6(),["FulfillmentCommandResult"]:c7(),["FulfillmentEvent"]:c8(),["FulfillmentLineItem"]:c9(),["FulfillmentNotification"]:c10(),["FulfillmentRecipient"]:c11(),["MoneyValue"]:c12(),["OrderLineItemModifier"]:c13(),["PickupFulfillmentDetails"]:c14(),["PostalAddress"]:c15(),["PricingAmounts"]:c16(),["ServiceFulfillmentDetails"]:c17(),["SettlementAmounts"]:c18(),["SharedCodec242"]:c19(),["SharedCodec243"]:c20(),["SharedCodec246"]:c21(),["SharedCodec26"]:c22(),["SharedCodec7"]:c23(),["SignedMoney"]:c24(),["TextModifierRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentCommandResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
