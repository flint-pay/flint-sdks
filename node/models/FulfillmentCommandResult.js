import { d611 as c0, d765 as c1, d45 as c2, d797 as c3, d800 as c4, d783 as c5, d809 as c6, d811 as c7, d812 as c8, d818 as c9, d822 as c10, d826 as c11, d77 as c12, d1872 as c13, d2031 as c14, d73 as c15, d2034 as c16, d2314 as c17, d2320 as c18, d781 as c19, d782 as c20, d821 as c21, d99 as c22, d46 as c23, d226 as c24, d2380 as c25 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d811 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d811;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFulfillmentDetails"]:c0(),["DigitalFulfillmentDetails"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPackageSummary"]:c3(),["ExpandedShipmentSummary"]:c4(),["Fulfillment"]:c5(),["FulfillmentChargeLink"]:c6(),["FulfillmentCommandResult"]:c7(),["FulfillmentEvent"]:c8(),["FulfillmentLineItem"]:c9(),["FulfillmentNotification"]:c10(),["FulfillmentRecipient"]:c11(),["MoneyValue"]:c12(),["OrderLineItemModifier"]:c13(),["PickupFulfillmentDetails"]:c14(),["PostalAddress"]:c15(),["PricingAmounts"]:c16(),["ServiceFulfillmentDetails"]:c17(),["SettlementAmounts"]:c18(),["SharedCodec249"]:c19(),["SharedCodec250"]:c20(),["SharedCodec254"]:c21(),["SharedCodec27"]:c22(),["SharedCodec8"]:c23(),["SignedMoney"]:c24(),["TextModifierRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentCommandResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
