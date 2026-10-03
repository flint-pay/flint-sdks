import { d595 as c0, d747 as c1, d42 as c2, d777 as c3, d780 as c4, d764 as c5, d789 as c6, d798 as c7, d806 as c8, d74 as c9, d1833 as c10, d1991 as c11, d70 as c12, d1994 as c13, d2275 as c14, d2281 as c15, d762 as c16, d763 as c17, d96 as c18, d1804 as c19, d2340 as c20 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d764 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d764;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFulfillmentDetails"]:c0(),["DigitalFulfillmentDetails"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPackageSummary"]:c3(),["ExpandedShipmentSummary"]:c4(),["Fulfillment"]:c5(),["FulfillmentChargeLink"]:c6(),["FulfillmentLineItem"]:c7(),["FulfillmentRecipient"]:c8(),["MoneyValue"]:c9(),["OrderLineItemModifier"]:c10(),["PickupFulfillmentDetails"]:c11(),["PostalAddress"]:c12(),["PricingAmounts"]:c13(),["ServiceFulfillmentDetails"]:c14(),["SettlementAmounts"]:c15(),["SharedCodec242"]:c16(),["SharedCodec243"]:c17(),["SharedCodec26"]:c18(),["SignedMoney"]:c19(),["TextModifierRequest"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
