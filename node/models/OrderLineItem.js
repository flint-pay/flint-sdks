import { d61 as c0, d171 as c1, d863 as c2, d885 as c3, d886 as c4, d907 as c5, d1726 as c6, d1727 as c7, d74 as c8, d1811 as c9, d1834 as c10, d1835 as c11, d2064 as c12, d2275 as c13, d403 as c14, d60 as c15, d1819 as c16, d1833 as c17, d1806 as c18, d2334 as c19, d2335 as c20, d2338 as c21, d2342 as c22 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1834 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1834;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["GiftCardCustomAmountBounds"]:c2(),["GiftCardProductConfiguration"]:c3(),["GiftCardPurchaseRecipient"]:c4(),["Image"]:c5(),["LineItemInventoryDemand"]:c6(),["LineItemInventorySnapshot"]:c7(),["MoneyValue"]:c8(),["OrderCalculatedLineItemTax"]:c9(),["OrderLineItem"]:c10(),["OrderLineItemModifier"]:c11(),["PurchasedGiftCard"]:c12(),["SelectedProductOption"]:c13(),["SharedCodec146"]:c14(),["SharedCodec16"]:c15(),["SharedCodec482"]:c16(),["SharedCodec486"]:c17(),["SignedMoney"]:c18(),["TaxCalculationRequest"]:c19(),["TaxComponentRequest"]:c20(),["TaxJurisdiction"]:c21(),["TextModifierRequest"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
