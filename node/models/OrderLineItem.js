import { d64 as c0, d180 as c1, d887 as c2, d910 as c3, d911 as c4, d932 as c5, d1763 as c6, d1764 as c7, d77 as c8, d1854 as c9, d1878 as c10, d1879 as c11, d2107 as c12, d2319 as c13, d413 as c14, d63 as c15, d1862 as c16, d1876 as c17, d1877 as c18, d227 as c19, d2379 as c20, d2380 as c21, d2383 as c22, d2387 as c23 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1878 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1878;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["GiftCardCustomAmountBounds"]:c2(),["GiftCardProductConfiguration"]:c3(),["GiftCardPurchaseRecipient"]:c4(),["Image"]:c5(),["LineItemInventoryDemand"]:c6(),["LineItemInventorySnapshot"]:c7(),["MoneyValue"]:c8(),["OrderCalculatedLineItemTax"]:c9(),["OrderLineItem"]:c10(),["OrderLineItemModifier"]:c11(),["PurchasedGiftCard"]:c12(),["SelectedProductOption"]:c13(),["SharedCodec149"]:c14(),["SharedCodec17"]:c15(),["SharedCodec497"]:c16(),["SharedCodec501"]:c17(),["SharedCodec502"]:c18(),["SignedMoney"]:c19(),["TaxCalculationRequest"]:c20(),["TaxComponentRequest"]:c21(),["TaxJurisdiction"]:c22(),["TextModifierRequest"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
