import { d611 as c0, d771 as c1, d45 as c2, d804 as c3, d807 as c4, d790 as c5, d816 as c6, d825 as c7, d827 as c8, d789 as c9, d77 as c10, d1830 as c11, d1829 as c12, d1879 as c13, d2038 as c14, d73 as c15, d2041 as c16, d2164 as c17, d2165 as c18, d2321 as c19, d2327 as c20, d14 as c21, d787 as c22, d788 as c23, d104 as c24, d1828 as c25, d227 as c26, d2387 as c27 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d827 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d827;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFulfillmentDetails"]:c0(),["DigitalFulfillmentDetails"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPackageSummary"]:c3(),["ExpandedShipmentSummary"]:c4(),["Fulfillment"]:c5(),["FulfillmentChargeLink"]:c6(),["FulfillmentLineItem"]:c7(),["FulfillmentListResponse"]:c8(),["FulfillmentRecipient"]:c9(),["MoneyValue"]:c10(),["NextAction"]:c11(),["NextActionMerchantAccountSession"]:c12(),["OrderLineItemModifier"]:c13(),["PickupFulfillmentDetails"]:c14(),["PostalAddress"]:c15(),["PricingAmounts"]:c16(),["ResponseMeta"]:c17(),["ResponseWarning"]:c18(),["ServiceFulfillmentDetails"]:c19(),["SettlementAmounts"]:c20(),["SharedCodec1"]:c21(),["SharedCodec253"]:c22(),["SharedCodec254"]:c23(),["SharedCodec29"]:c24(),["SharedCodec492"]:c25(),["SignedMoney"]:c26(),["TextModifierRequest"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
