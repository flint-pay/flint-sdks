import { d579 as c0, d737 as c1, d42 as c2, d766 as c3, d769 as c4, d754 as c5, d780 as c6, d788 as c7, d789 as c8, d796 as c9, d798 as c10, d323 as c11, d1874 as c12, d2036 as c13, d66 as c14, d2039 as c15, d2320 as c16, d2324 as c17, d92 as c18, d2017 as c19, d2415 as c20 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d754 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d754;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFulfillmentDetails"]:c0(),["DigitalFulfillmentDetails"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPackageSummary"]:c3(),["ExpandedShipmentSummary"]:c4(),["Fulfillment"]:c5(),["FulfillmentChargeLink"]:c6(),["FulfillmentHold"]:c7(),["FulfillmentLineItem"]:c8(),["FulfillmentOutcome"]:c9(),["FulfillmentRecipient"]:c10(),["MoneyValue"]:c11(),["OrderLineItemModifier"]:c12(),["PickupFulfillmentDetails"]:c13(),["PostalAddress"]:c14(),["PricingAmounts"]:c15(),["ServiceFulfillmentDetails"]:c16(),["SettlementAmounts"]:c17(),["SharedCodec17"]:c18(),["SignedMoney"]:c19(),["TextModifierRequest"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
