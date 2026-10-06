import { d64 as c0, d172 as c1, d218 as c2, d868 as c3, d891 as c4, d892 as c5, d912 as c6, d1731 as c7, d1732 as c8, d77 as c9, d1821 as c10, d1845 as c11, d1846 as c12, d2074 as c13, d2286 as c14, d407 as c15, d63 as c16, d1829 as c17, d1843 as c18, d1844 as c19, d223 as c20, d2346 as c21, d2347 as c22, d2350 as c23, d2354 as c24 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d218 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d218;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["CheckoutSessionLineItemModifierUpdate"]:c2(),["GiftCardCustomAmountBounds"]:c3(),["GiftCardProductConfiguration"]:c4(),["GiftCardPurchaseRecipient"]:c5(),["Image"]:c6(),["LineItemInventoryDemand"]:c7(),["LineItemInventorySnapshot"]:c8(),["MoneyValue"]:c9(),["OrderCalculatedLineItemTax"]:c10(),["OrderLineItem"]:c11(),["OrderLineItemModifier"]:c12(),["PurchasedGiftCard"]:c13(),["SelectedProductOption"]:c14(),["SharedCodec149"]:c15(),["SharedCodec17"]:c16(),["SharedCodec490"]:c17(),["SharedCodec494"]:c18(),["SharedCodec495"]:c19(),["SignedMoney"]:c20(),["TaxCalculationRequest"]:c21(),["TaxComponentRequest"]:c22(),["TaxJurisdiction"]:c23(),["TextModifierRequest"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSessionLineItemModifierUpdate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
