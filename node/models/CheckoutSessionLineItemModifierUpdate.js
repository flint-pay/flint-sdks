import { d59 as c0, d61 as c1, d135 as c2, d185 as c3, d828 as c4, d845 as c5, d846 as c6, d854 as c7, d868 as c8, d1710 as c9, d1711 as c10, d314 as c11, d1803 as c12, d1828 as c13, d1829 as c14, d2054 as c15, d2268 as c16, d827 as c17, d1813 as c18, d1827 as c19, d1970 as c20, d2323 as c21, d2324 as c22, d2327 as c23, d2331 as c24 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d185 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d185;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BundleComponentVariantSummary"]:c1(),["CategoryReference"]:c2(),["CheckoutSessionLineItemModifierUpdate"]:c3(),["GiftCardCustomAmountBounds"]:c4(),["GiftCardProductConfiguration"]:c5(),["GiftCardPurchaseRecipient"]:c6(),["GiftCardPurchaseSnapshot"]:c7(),["Image"]:c8(),["LineItemInventoryDemand"]:c9(),["LineItemInventorySnapshot"]:c10(),["MoneyValue"]:c11(),["OrderCalculatedLineItemTax"]:c12(),["OrderLineItem"]:c13(),["OrderLineItemModifier"]:c14(),["PurchasedGiftCard"]:c15(),["SelectedProductOption"]:c16(),["SharedCodec234"]:c17(),["SharedCodec455"]:c18(),["SharedCodec459"]:c19(),["SignedMoney"]:c20(),["TaxCalculationRequest"]:c21(),["TaxComponentRequest"]:c22(),["TaxJurisdiction"]:c23(),["TextModifierRequest"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSessionLineItemModifierUpdate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
