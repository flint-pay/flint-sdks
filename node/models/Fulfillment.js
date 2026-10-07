import { d611 as c0, d765 as c1, d45 as c2, d797 as c3, d800 as c4, d783 as c5, d809 as c6, d818 as c7, d826 as c8, d77 as c9, d1873 as c10, d2032 as c11, d73 as c12, d2035 as c13, d2315 as c14, d2321 as c15, d781 as c16, d782 as c17, d99 as c18, d226 as c19, d2381 as c20 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d783 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d783;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFulfillmentDetails"]:c0(),["DigitalFulfillmentDetails"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPackageSummary"]:c3(),["ExpandedShipmentSummary"]:c4(),["Fulfillment"]:c5(),["FulfillmentChargeLink"]:c6(),["FulfillmentLineItem"]:c7(),["FulfillmentRecipient"]:c8(),["MoneyValue"]:c9(),["OrderLineItemModifier"]:c10(),["PickupFulfillmentDetails"]:c11(),["PostalAddress"]:c12(),["PricingAmounts"]:c13(),["ServiceFulfillmentDetails"]:c14(),["SettlementAmounts"]:c15(),["SharedCodec249"]:c16(),["SharedCodec250"]:c17(),["SharedCodec27"]:c18(),["SignedMoney"]:c19(),["TextModifierRequest"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
