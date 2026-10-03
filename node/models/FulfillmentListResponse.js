import { d595 as c0, d747 as c1, d42 as c2, d777 as c3, d780 as c4, d764 as c5, d789 as c6, d798 as c7, d800 as c8, d806 as c9, d74 as c10, d1784 as c11, d1783 as c12, d1833 as c13, d1991 as c14, d70 as c15, d1994 as c16, d2119 as c17, d2120 as c18, d2275 as c19, d2281 as c20, d762 as c21, d763 as c22, d96 as c23, d1804 as c24, d2340 as c25 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d800 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d800;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFulfillmentDetails"]:c0(),["DigitalFulfillmentDetails"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPackageSummary"]:c3(),["ExpandedShipmentSummary"]:c4(),["Fulfillment"]:c5(),["FulfillmentChargeLink"]:c6(),["FulfillmentLineItem"]:c7(),["FulfillmentListResponse"]:c8(),["FulfillmentRecipient"]:c9(),["MoneyValue"]:c10(),["NextAction"]:c11(),["NextActionMerchantAccountSession"]:c12(),["OrderLineItemModifier"]:c13(),["PickupFulfillmentDetails"]:c14(),["PostalAddress"]:c15(),["PricingAmounts"]:c16(),["ResponseMeta"]:c17(),["ResponseWarning"]:c18(),["ServiceFulfillmentDetails"]:c19(),["SettlementAmounts"]:c20(),["SharedCodec242"]:c21(),["SharedCodec243"]:c22(),["SharedCodec26"]:c23(),["SignedMoney"]:c24(),["TextModifierRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
