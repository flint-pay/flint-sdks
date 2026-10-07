import { d64 as c0, d175 as c1, d221 as c2, d881 as c3, d904 as c4, d905 as c5, d926 as c6, d1757 as c7, d1758 as c8, d77 as c9, d1848 as c10, d1872 as c11, d1873 as c12, d2101 as c13, d2313 as c14, d412 as c15, d63 as c16, d1856 as c17, d1870 as c18, d1871 as c19, d226 as c20, d2373 as c21, d2374 as c22, d2377 as c23, d2381 as c24 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d221 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d221;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["CheckoutSessionLineItemModifierUpdate"]:c2(),["GiftCardCustomAmountBounds"]:c3(),["GiftCardProductConfiguration"]:c4(),["GiftCardPurchaseRecipient"]:c5(),["Image"]:c6(),["LineItemInventoryDemand"]:c7(),["LineItemInventorySnapshot"]:c8(),["MoneyValue"]:c9(),["OrderCalculatedLineItemTax"]:c10(),["OrderLineItem"]:c11(),["OrderLineItemModifier"]:c12(),["PurchasedGiftCard"]:c13(),["SelectedProductOption"]:c14(),["SharedCodec149"]:c15(),["SharedCodec17"]:c16(),["SharedCodec493"]:c17(),["SharedCodec497"]:c18(),["SharedCodec498"]:c19(),["SignedMoney"]:c20(),["TaxCalculationRequest"]:c21(),["TaxComponentRequest"]:c22(),["TaxJurisdiction"]:c23(),["TextModifierRequest"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSessionLineItemModifierUpdate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
