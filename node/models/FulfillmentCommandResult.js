import { d597 as c0, d749 as c1, d42 as c2, d779 as c3, d782 as c4, d766 as c5, d791 as c6, d793 as c7, d794 as c8, d800 as c9, d804 as c10, d808 as c11, d74 as c12, d1835 as c13, d1993 as c14, d70 as c15, d1996 as c16, d2277 as c17, d2283 as c18, d764 as c19, d765 as c20, d803 as c21, d96 as c22, d43 as c23, d1806 as c24, d2342 as c25 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d793 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d793;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFulfillmentDetails"]:c0(),["DigitalFulfillmentDetails"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPackageSummary"]:c3(),["ExpandedShipmentSummary"]:c4(),["Fulfillment"]:c5(),["FulfillmentChargeLink"]:c6(),["FulfillmentCommandResult"]:c7(),["FulfillmentEvent"]:c8(),["FulfillmentLineItem"]:c9(),["FulfillmentNotification"]:c10(),["FulfillmentRecipient"]:c11(),["MoneyValue"]:c12(),["OrderLineItemModifier"]:c13(),["PickupFulfillmentDetails"]:c14(),["PostalAddress"]:c15(),["PricingAmounts"]:c16(),["ServiceFulfillmentDetails"]:c17(),["SettlementAmounts"]:c18(),["SharedCodec242"]:c19(),["SharedCodec243"]:c20(),["SharedCodec246"]:c21(),["SharedCodec26"]:c22(),["SharedCodec7"]:c23(),["SignedMoney"]:c24(),["TextModifierRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentCommandResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
