import { d61 as c0, d169 as c1, d861 as c2, d883 as c3, d884 as c4, d905 as c5, d1724 as c6, d1725 as c7, d74 as c8, d1809 as c9, d1832 as c10, d1833 as c11, d2062 as c12, d2273 as c13, d401 as c14, d60 as c15, d1817 as c16, d1831 as c17, d1804 as c18, d2332 as c19, d2333 as c20, d2336 as c21, d2340 as c22 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1832 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1832;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["GiftCardCustomAmountBounds"]:c2(),["GiftCardProductConfiguration"]:c3(),["GiftCardPurchaseRecipient"]:c4(),["Image"]:c5(),["LineItemInventoryDemand"]:c6(),["LineItemInventorySnapshot"]:c7(),["MoneyValue"]:c8(),["OrderCalculatedLineItemTax"]:c9(),["OrderLineItem"]:c10(),["OrderLineItemModifier"]:c11(),["PurchasedGiftCard"]:c12(),["SelectedProductOption"]:c13(),["SharedCodec146"]:c14(),["SharedCodec16"]:c15(),["SharedCodec482"]:c16(),["SharedCodec486"]:c17(),["SignedMoney"]:c18(),["TaxCalculationRequest"]:c19(),["TaxComponentRequest"]:c20(),["TaxJurisdiction"]:c21(),["TextModifierRequest"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
