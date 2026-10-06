import { d64 as c0, d176 as c1, d881 as c2, d904 as c3, d905 as c4, d926 as c5, d1756 as c6, d1757 as c7, d77 as c8, d1847 as c9, d1871 as c10, d1872 as c11, d2100 as c12, d2312 as c13, d412 as c14, d63 as c15, d1855 as c16, d1869 as c17, d1870 as c18, d226 as c19, d2372 as c20, d2373 as c21, d2376 as c22, d2380 as c23 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1871 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1871;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["GiftCardCustomAmountBounds"]:c2(),["GiftCardProductConfiguration"]:c3(),["GiftCardPurchaseRecipient"]:c4(),["Image"]:c5(),["LineItemInventoryDemand"]:c6(),["LineItemInventorySnapshot"]:c7(),["MoneyValue"]:c8(),["OrderCalculatedLineItemTax"]:c9(),["OrderLineItem"]:c10(),["OrderLineItemModifier"]:c11(),["PurchasedGiftCard"]:c12(),["SelectedProductOption"]:c13(),["SharedCodec149"]:c14(),["SharedCodec17"]:c15(),["SharedCodec492"]:c16(),["SharedCodec496"]:c17(),["SharedCodec497"]:c18(),["SignedMoney"]:c19(),["TaxCalculationRequest"]:c20(),["TaxComponentRequest"]:c21(),["TaxJurisdiction"]:c22(),["TextModifierRequest"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
