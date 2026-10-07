import { d611 as c0, d771 as c1, d45 as c2, d804 as c3, d807 as c4, d790 as c5, d816 as c6, d818 as c7, d819 as c8, d825 as c9, d829 as c10, d789 as c11, d77 as c12, d1879 as c13, d2038 as c14, d73 as c15, d2041 as c16, d2321 as c17, d2327 as c18, d787 as c19, d788 as c20, d828 as c21, d104 as c22, d46 as c23, d227 as c24, d2387 as c25 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d818 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d818;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFulfillmentDetails"]:c0(),["DigitalFulfillmentDetails"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPackageSummary"]:c3(),["ExpandedShipmentSummary"]:c4(),["Fulfillment"]:c5(),["FulfillmentChargeLink"]:c6(),["FulfillmentCommandResult"]:c7(),["FulfillmentEvent"]:c8(),["FulfillmentLineItem"]:c9(),["FulfillmentNotification"]:c10(),["FulfillmentRecipient"]:c11(),["MoneyValue"]:c12(),["OrderLineItemModifier"]:c13(),["PickupFulfillmentDetails"]:c14(),["PostalAddress"]:c15(),["PricingAmounts"]:c16(),["ServiceFulfillmentDetails"]:c17(),["SettlementAmounts"]:c18(),["SharedCodec253"]:c19(),["SharedCodec254"]:c20(),["SharedCodec258"]:c21(),["SharedCodec29"]:c22(),["SharedCodec8"]:c23(),["SignedMoney"]:c24(),["TextModifierRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentCommandResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
