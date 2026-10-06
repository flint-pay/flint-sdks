import { d602 as c0, d756 as c1, d45 as c2, d785 as c3, d788 as c4, d771 as c5, d797 as c6, d799 as c7, d800 as c8, d806 as c9, d810 as c10, d814 as c11, d77 as c12, d1846 as c13, d2005 as c14, d73 as c15, d2008 as c16, d2288 as c17, d2294 as c18, d769 as c19, d770 as c20, d809 as c21, d99 as c22, d46 as c23, d223 as c24, d2354 as c25 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d799 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d799;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFulfillmentDetails"]:c0(),["DigitalFulfillmentDetails"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPackageSummary"]:c3(),["ExpandedShipmentSummary"]:c4(),["Fulfillment"]:c5(),["FulfillmentChargeLink"]:c6(),["FulfillmentCommandResult"]:c7(),["FulfillmentEvent"]:c8(),["FulfillmentLineItem"]:c9(),["FulfillmentNotification"]:c10(),["FulfillmentRecipient"]:c11(),["MoneyValue"]:c12(),["OrderLineItemModifier"]:c13(),["PickupFulfillmentDetails"]:c14(),["PostalAddress"]:c15(),["PricingAmounts"]:c16(),["ServiceFulfillmentDetails"]:c17(),["SettlementAmounts"]:c18(),["SharedCodec248"]:c19(),["SharedCodec249"]:c20(),["SharedCodec253"]:c21(),["SharedCodec27"]:c22(),["SharedCodec8"]:c23(),["SignedMoney"]:c24(),["TextModifierRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentCommandResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
