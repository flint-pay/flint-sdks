import { d597 as c0, d749 as c1, d42 as c2, d779 as c3, d782 as c4, d766 as c5, d791 as c6, d800 as c7, d808 as c8, d74 as c9, d1835 as c10, d1993 as c11, d70 as c12, d1996 as c13, d2277 as c14, d2283 as c15, d764 as c16, d765 as c17, d96 as c18, d1806 as c19, d2342 as c20 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d766 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d766;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFulfillmentDetails"]:c0(),["DigitalFulfillmentDetails"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPackageSummary"]:c3(),["ExpandedShipmentSummary"]:c4(),["Fulfillment"]:c5(),["FulfillmentChargeLink"]:c6(),["FulfillmentLineItem"]:c7(),["FulfillmentRecipient"]:c8(),["MoneyValue"]:c9(),["OrderLineItemModifier"]:c10(),["PickupFulfillmentDetails"]:c11(),["PostalAddress"]:c12(),["PricingAmounts"]:c13(),["ServiceFulfillmentDetails"]:c14(),["SettlementAmounts"]:c15(),["SharedCodec242"]:c16(),["SharedCodec243"]:c17(),["SharedCodec26"]:c18(),["SignedMoney"]:c19(),["TextModifierRequest"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
