import { d589 as c0, d747 as c1, d42 as c2, d776 as c3, d779 as c4, d764 as c5, d790 as c6, d792 as c7, d793 as c8, d798 as c9, d799 as c10, d803 as c11, d806 as c12, d808 as c13, d323 as c14, d1879 as c15, d2053 as c16, d66 as c17, d2056 as c18, d2336 as c19, d2340 as c20, d92 as c21, d802 as c22, d43 as c23, d2034 as c24, d2431 as c25 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d792 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d792;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFulfillmentDetails"]:c0(),["DigitalFulfillmentDetails"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPackageSummary"]:c3(),["ExpandedShipmentSummary"]:c4(),["Fulfillment"]:c5(),["FulfillmentChargeLink"]:c6(),["FulfillmentCommandResult"]:c7(),["FulfillmentEvent"]:c8(),["FulfillmentHold"]:c9(),["FulfillmentLineItem"]:c10(),["FulfillmentNotification"]:c11(),["FulfillmentOutcome"]:c12(),["FulfillmentRecipient"]:c13(),["MoneyValue"]:c14(),["OrderLineItemModifier"]:c15(),["PickupFulfillmentDetails"]:c16(),["PostalAddress"]:c17(),["PricingAmounts"]:c18(),["ServiceFulfillmentDetails"]:c19(),["SettlementAmounts"]:c20(),["SharedCodec17"]:c21(),["SharedCodec233"]:c22(),["SharedCodec5"]:c23(),["SignedMoney"]:c24(),["TextModifierRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentCommandResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
