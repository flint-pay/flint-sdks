import { d611 as c0, d765 as c1, d45 as c2, d797 as c3, d800 as c4, d783 as c5, d809 as c6, d818 as c7, d826 as c8, d827 as c9, d77 as c10, d1824 as c11, d1823 as c12, d1873 as c13, d2032 as c14, d73 as c15, d2035 as c16, d2158 as c17, d2159 as c18, d2315 as c19, d2321 as c20, d14 as c21, d781 as c22, d782 as c23, d99 as c24, d1822 as c25, d226 as c26, d2381 as c27 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d827 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d827;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFulfillmentDetails"]:c0(),["DigitalFulfillmentDetails"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPackageSummary"]:c3(),["ExpandedShipmentSummary"]:c4(),["Fulfillment"]:c5(),["FulfillmentChargeLink"]:c6(),["FulfillmentLineItem"]:c7(),["FulfillmentRecipient"]:c8(),["FulfillmentResponse"]:c9(),["MoneyValue"]:c10(),["NextAction"]:c11(),["NextActionMerchantAccountSession"]:c12(),["OrderLineItemModifier"]:c13(),["PickupFulfillmentDetails"]:c14(),["PostalAddress"]:c15(),["PricingAmounts"]:c16(),["ResponseMeta"]:c17(),["ResponseWarning"]:c18(),["ServiceFulfillmentDetails"]:c19(),["SettlementAmounts"]:c20(),["SharedCodec1"]:c21(),["SharedCodec249"]:c22(),["SharedCodec250"]:c23(),["SharedCodec27"]:c24(),["SharedCodec488"]:c25(),["SignedMoney"]:c26(),["TextModifierRequest"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
