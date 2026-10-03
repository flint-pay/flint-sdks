import { d61 as c0, d169 as c1, d215 as c2, d861 as c3, d883 as c4, d884 as c5, d905 as c6, d1724 as c7, d1725 as c8, d74 as c9, d1809 as c10, d1832 as c11, d1833 as c12, d2061 as c13, d2272 as c14, d401 as c15, d60 as c16, d1817 as c17, d1831 as c18, d1804 as c19, d2331 as c20, d2332 as c21, d2335 as c22, d2339 as c23 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d215 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d215;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["CheckoutSessionLineItemModifierUpdate"]:c2(),["GiftCardCustomAmountBounds"]:c3(),["GiftCardProductConfiguration"]:c4(),["GiftCardPurchaseRecipient"]:c5(),["Image"]:c6(),["LineItemInventoryDemand"]:c7(),["LineItemInventorySnapshot"]:c8(),["MoneyValue"]:c9(),["OrderCalculatedLineItemTax"]:c10(),["OrderLineItem"]:c11(),["OrderLineItemModifier"]:c12(),["PurchasedGiftCard"]:c13(),["SelectedProductOption"]:c14(),["SharedCodec146"]:c15(),["SharedCodec16"]:c16(),["SharedCodec482"]:c17(),["SharedCodec486"]:c18(),["SignedMoney"]:c19(),["TaxCalculationRequest"]:c20(),["TaxComponentRequest"]:c21(),["TaxJurisdiction"]:c22(),["TextModifierRequest"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSessionLineItemModifierUpdate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
