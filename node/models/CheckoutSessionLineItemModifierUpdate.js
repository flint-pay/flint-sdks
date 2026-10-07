import { d64 as c0, d180 as c1, d222 as c2, d887 as c3, d910 as c4, d911 as c5, d932 as c6, d1763 as c7, d1764 as c8, d77 as c9, d1854 as c10, d1878 as c11, d1879 as c12, d2107 as c13, d2319 as c14, d413 as c15, d63 as c16, d1862 as c17, d1876 as c18, d1877 as c19, d227 as c20, d2379 as c21, d2380 as c22, d2383 as c23, d2387 as c24 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d222 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d222;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["CheckoutSessionLineItemModifierUpdate"]:c2(),["GiftCardCustomAmountBounds"]:c3(),["GiftCardProductConfiguration"]:c4(),["GiftCardPurchaseRecipient"]:c5(),["Image"]:c6(),["LineItemInventoryDemand"]:c7(),["LineItemInventorySnapshot"]:c8(),["MoneyValue"]:c9(),["OrderCalculatedLineItemTax"]:c10(),["OrderLineItem"]:c11(),["OrderLineItemModifier"]:c12(),["PurchasedGiftCard"]:c13(),["SelectedProductOption"]:c14(),["SharedCodec149"]:c15(),["SharedCodec17"]:c16(),["SharedCodec497"]:c17(),["SharedCodec501"]:c18(),["SharedCodec502"]:c19(),["SignedMoney"]:c20(),["TaxCalculationRequest"]:c21(),["TaxComponentRequest"]:c22(),["TaxJurisdiction"]:c23(),["TextModifierRequest"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSessionLineItemModifierUpdate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
