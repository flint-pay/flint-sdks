import { d579 as c0, d737 as c1, d42 as c2, d766 as c3, d769 as c4, d754 as c5, d780 as c6, d782 as c7, d783 as c8, d788 as c9, d789 as c10, d793 as c11, d796 as c12, d798 as c13, d323 as c14, d1874 as c15, d2036 as c16, d66 as c17, d2039 as c18, d2320 as c19, d2324 as c20, d92 as c21, d792 as c22, d43 as c23, d2017 as c24, d2415 as c25 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d782 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d782;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFulfillmentDetails"]:c0(),["DigitalFulfillmentDetails"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPackageSummary"]:c3(),["ExpandedShipmentSummary"]:c4(),["Fulfillment"]:c5(),["FulfillmentChargeLink"]:c6(),["FulfillmentCommandResult"]:c7(),["FulfillmentEvent"]:c8(),["FulfillmentHold"]:c9(),["FulfillmentLineItem"]:c10(),["FulfillmentNotification"]:c11(),["FulfillmentOutcome"]:c12(),["FulfillmentRecipient"]:c13(),["MoneyValue"]:c14(),["OrderLineItemModifier"]:c15(),["PickupFulfillmentDetails"]:c16(),["PostalAddress"]:c17(),["PricingAmounts"]:c18(),["ServiceFulfillmentDetails"]:c19(),["SettlementAmounts"]:c20(),["SharedCodec17"]:c21(),["SharedCodec227"]:c22(),["SharedCodec5"]:c23(),["SignedMoney"]:c24(),["TextModifierRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentCommandResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
