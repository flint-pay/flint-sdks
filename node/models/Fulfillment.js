import { d611 as c0, d771 as c1, d45 as c2, d804 as c3, d807 as c4, d790 as c5, d816 as c6, d825 as c7, d789 as c8, d77 as c9, d1879 as c10, d2038 as c11, d73 as c12, d2041 as c13, d2321 as c14, d2327 as c15, d787 as c16, d788 as c17, d104 as c18, d227 as c19, d2387 as c20 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d790 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d790;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFulfillmentDetails"]:c0(),["DigitalFulfillmentDetails"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPackageSummary"]:c3(),["ExpandedShipmentSummary"]:c4(),["Fulfillment"]:c5(),["FulfillmentChargeLink"]:c6(),["FulfillmentLineItem"]:c7(),["FulfillmentRecipient"]:c8(),["MoneyValue"]:c9(),["OrderLineItemModifier"]:c10(),["PickupFulfillmentDetails"]:c11(),["PostalAddress"]:c12(),["PricingAmounts"]:c13(),["ServiceFulfillmentDetails"]:c14(),["SettlementAmounts"]:c15(),["SharedCodec253"]:c16(),["SharedCodec254"]:c17(),["SharedCodec29"]:c18(),["SignedMoney"]:c19(),["TextModifierRequest"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
