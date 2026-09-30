import { d546 as c0, d698 as c1, d41 as c2, d729 as c3, d732 as c4, d716 as c5, d741 as c6, d750 as c7, d758 as c8, d69 as c9, d1686 as c10, d1840 as c11, d65 as c12, d1843 as c13, d2110 as c14, d2116 as c15, d714 as c16, d715 as c17, d91 as c18, d1666 as c19, d2174 as c20 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d716 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d716;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFulfillmentDetails"]:c0(),["DigitalFulfillmentDetails"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPackageSummary"]:c3(),["ExpandedShipmentSummary"]:c4(),["Fulfillment"]:c5(),["FulfillmentChargeLink"]:c6(),["FulfillmentLineItem"]:c7(),["FulfillmentRecipient"]:c8(),["MoneyValue"]:c9(),["OrderLineItemModifier"]:c10(),["PickupFulfillmentDetails"]:c11(),["PostalAddress"]:c12(),["PricingAmounts"]:c13(),["ServiceFulfillmentDetails"]:c14(),["SettlementAmounts"]:c15(),["SharedCodec221"]:c16(),["SharedCodec222"]:c17(),["SharedCodec26"]:c18(),["SignedMoney"]:c19(),["TextModifierRequest"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
