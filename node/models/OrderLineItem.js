import { d64 as c0, d175 as c1, d881 as c2, d904 as c3, d905 as c4, d926 as c5, d1757 as c6, d1758 as c7, d77 as c8, d1848 as c9, d1872 as c10, d1873 as c11, d2101 as c12, d2313 as c13, d412 as c14, d63 as c15, d1856 as c16, d1870 as c17, d1871 as c18, d226 as c19, d2373 as c20, d2374 as c21, d2377 as c22, d2381 as c23 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1872 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1872;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["GiftCardCustomAmountBounds"]:c2(),["GiftCardProductConfiguration"]:c3(),["GiftCardPurchaseRecipient"]:c4(),["Image"]:c5(),["LineItemInventoryDemand"]:c6(),["LineItemInventorySnapshot"]:c7(),["MoneyValue"]:c8(),["OrderCalculatedLineItemTax"]:c9(),["OrderLineItem"]:c10(),["OrderLineItemModifier"]:c11(),["PurchasedGiftCard"]:c12(),["SelectedProductOption"]:c13(),["SharedCodec149"]:c14(),["SharedCodec17"]:c15(),["SharedCodec493"]:c16(),["SharedCodec497"]:c17(),["SharedCodec498"]:c18(),["SignedMoney"]:c19(),["TaxCalculationRequest"]:c20(),["TaxComponentRequest"]:c21(),["TaxJurisdiction"]:c22(),["TextModifierRequest"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
