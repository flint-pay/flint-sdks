import { d602 as c0, d756 as c1, d45 as c2, d785 as c3, d788 as c4, d771 as c5, d797 as c6, d806 as c7, d808 as c8, d814 as c9, d77 as c10, d1797 as c11, d1796 as c12, d1846 as c13, d2005 as c14, d73 as c15, d2008 as c16, d2131 as c17, d2132 as c18, d2288 as c19, d2294 as c20, d14 as c21, d769 as c22, d770 as c23, d99 as c24, d1795 as c25, d223 as c26, d2354 as c27 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d808 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d808;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFulfillmentDetails"]:c0(),["DigitalFulfillmentDetails"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPackageSummary"]:c3(),["ExpandedShipmentSummary"]:c4(),["Fulfillment"]:c5(),["FulfillmentChargeLink"]:c6(),["FulfillmentLineItem"]:c7(),["FulfillmentListResponse"]:c8(),["FulfillmentRecipient"]:c9(),["MoneyValue"]:c10(),["NextAction"]:c11(),["NextActionMerchantAccountSession"]:c12(),["OrderLineItemModifier"]:c13(),["PickupFulfillmentDetails"]:c14(),["PostalAddress"]:c15(),["PricingAmounts"]:c16(),["ResponseMeta"]:c17(),["ResponseWarning"]:c18(),["ServiceFulfillmentDetails"]:c19(),["SettlementAmounts"]:c20(),["SharedCodec1"]:c21(),["SharedCodec248"]:c22(),["SharedCodec249"]:c23(),["SharedCodec27"]:c24(),["SharedCodec485"]:c25(),["SignedMoney"]:c26(),["TextModifierRequest"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
