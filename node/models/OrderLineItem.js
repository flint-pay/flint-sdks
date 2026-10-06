import { d64 as c0, d172 as c1, d868 as c2, d891 as c3, d892 as c4, d912 as c5, d1731 as c6, d1732 as c7, d77 as c8, d1821 as c9, d1845 as c10, d1846 as c11, d2074 as c12, d2286 as c13, d407 as c14, d63 as c15, d1829 as c16, d1843 as c17, d1844 as c18, d223 as c19, d2346 as c20, d2347 as c21, d2350 as c22, d2354 as c23 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1845 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1845;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["GiftCardCustomAmountBounds"]:c2(),["GiftCardProductConfiguration"]:c3(),["GiftCardPurchaseRecipient"]:c4(),["Image"]:c5(),["LineItemInventoryDemand"]:c6(),["LineItemInventorySnapshot"]:c7(),["MoneyValue"]:c8(),["OrderCalculatedLineItemTax"]:c9(),["OrderLineItem"]:c10(),["OrderLineItemModifier"]:c11(),["PurchasedGiftCard"]:c12(),["SelectedProductOption"]:c13(),["SharedCodec149"]:c14(),["SharedCodec17"]:c15(),["SharedCodec490"]:c16(),["SharedCodec494"]:c17(),["SharedCodec495"]:c18(),["SignedMoney"]:c19(),["TaxCalculationRequest"]:c20(),["TaxComponentRequest"]:c21(),["TaxJurisdiction"]:c22(),["TextModifierRequest"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
