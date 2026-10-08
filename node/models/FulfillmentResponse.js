import { d579 as c0, d737 as c1, d42 as c2, d766 as c3, d769 as c4, d754 as c5, d780 as c6, d788 as c7, d789 as c8, d796 as c9, d798 as c10, d799 as c11, d323 as c12, d1820 as c13, d1821 as c14, d1874 as c15, d2036 as c16, d66 as c17, d2039 as c18, d2162 as c19, d2163 as c20, d2320 as c21, d2324 as c22, d14 as c23, d92 as c24, d1819 as c25, d2017 as c26, d2415 as c27 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d799 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d799;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFulfillmentDetails"]:c0(),["DigitalFulfillmentDetails"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPackageSummary"]:c3(),["ExpandedShipmentSummary"]:c4(),["Fulfillment"]:c5(),["FulfillmentChargeLink"]:c6(),["FulfillmentHold"]:c7(),["FulfillmentLineItem"]:c8(),["FulfillmentOutcome"]:c9(),["FulfillmentRecipient"]:c10(),["FulfillmentResponse"]:c11(),["MoneyValue"]:c12(),["NextAction"]:c13(),["NextActionMerchantAccountSession"]:c14(),["OrderLineItemModifier"]:c15(),["PickupFulfillmentDetails"]:c16(),["PostalAddress"]:c17(),["PricingAmounts"]:c18(),["ResponseMeta"]:c19(),["ResponseWarning"]:c20(),["ServiceFulfillmentDetails"]:c21(),["SettlementAmounts"]:c22(),["SharedCodec1"]:c23(),["SharedCodec17"]:c24(),["SharedCodec466"]:c25(),["SignedMoney"]:c26(),["TextModifierRequest"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
