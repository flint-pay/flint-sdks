import { d597 as c0, d749 as c1, d42 as c2, d779 as c3, d782 as c4, d766 as c5, d791 as c6, d800 as c7, d808 as c8, d809 as c9, d74 as c10, d1786 as c11, d1785 as c12, d1835 as c13, d1993 as c14, d70 as c15, d1996 as c16, d2121 as c17, d2122 as c18, d2277 as c19, d2283 as c20, d764 as c21, d765 as c22, d96 as c23, d1806 as c24, d2342 as c25 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d809 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d809;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFulfillmentDetails"]:c0(),["DigitalFulfillmentDetails"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPackageSummary"]:c3(),["ExpandedShipmentSummary"]:c4(),["Fulfillment"]:c5(),["FulfillmentChargeLink"]:c6(),["FulfillmentLineItem"]:c7(),["FulfillmentRecipient"]:c8(),["FulfillmentResponse"]:c9(),["MoneyValue"]:c10(),["NextAction"]:c11(),["NextActionMerchantAccountSession"]:c12(),["OrderLineItemModifier"]:c13(),["PickupFulfillmentDetails"]:c14(),["PostalAddress"]:c15(),["PricingAmounts"]:c16(),["ResponseMeta"]:c17(),["ResponseWarning"]:c18(),["ServiceFulfillmentDetails"]:c19(),["SettlementAmounts"]:c20(),["SharedCodec242"]:c21(),["SharedCodec243"]:c22(),["SharedCodec26"]:c23(),["SignedMoney"]:c24(),["TextModifierRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
