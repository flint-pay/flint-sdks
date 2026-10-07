import { d59 as c0, d61 as c1, d135 as c2, d828 as c3, d845 as c4, d846 as c5, d854 as c6, d868 as c7, d1710 as c8, d1711 as c9, d314 as c10, d1803 as c11, d1828 as c12, d1829 as c13, d2054 as c14, d2268 as c15, d827 as c16, d1813 as c17, d1827 as c18, d1970 as c19, d2323 as c20, d2324 as c21, d2327 as c22, d2331 as c23 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1828 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1828;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BundleComponentVariantSummary"]:c1(),["CategoryReference"]:c2(),["GiftCardCustomAmountBounds"]:c3(),["GiftCardProductConfiguration"]:c4(),["GiftCardPurchaseRecipient"]:c5(),["GiftCardPurchaseSnapshot"]:c6(),["Image"]:c7(),["LineItemInventoryDemand"]:c8(),["LineItemInventorySnapshot"]:c9(),["MoneyValue"]:c10(),["OrderCalculatedLineItemTax"]:c11(),["OrderLineItem"]:c12(),["OrderLineItemModifier"]:c13(),["PurchasedGiftCard"]:c14(),["SelectedProductOption"]:c15(),["SharedCodec234"]:c16(),["SharedCodec455"]:c17(),["SharedCodec459"]:c18(),["SignedMoney"]:c19(),["TaxCalculationRequest"]:c20(),["TaxComponentRequest"]:c21(),["TaxJurisdiction"]:c22(),["TextModifierRequest"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
