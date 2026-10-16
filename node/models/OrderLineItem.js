import { d59 as c0, d61 as c1, d136 as c2, d854 as c3, d871 as c4, d872 as c5, d880 as c6, d894 as c7, d1758 as c8, d1759 as c9, d323 as c10, d1851 as c11, d1878 as c12, d1879 as c13, d1882 as c14, d1883 as c15, d2121 as c16, d2334 as c17, d853 as c18, d1877 as c19, d2034 as c20, d2352 as c21, d2381 as c22, d2423 as c23, d2424 as c24, d2427 as c25, d2431 as c26 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1878 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1878;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BundleComponentVariantSummary"]:c1(),["CategoryReference"]:c2(),["GiftCardCustomAmountBounds"]:c3(),["GiftCardProductConfiguration"]:c4(),["GiftCardPurchaseRecipient"]:c5(),["GiftCardPurchaseSnapshot"]:c6(),["Image"]:c7(),["LineItemInventoryDemand"]:c8(),["LineItemInventorySnapshot"]:c9(),["MoneyValue"]:c10(),["OrderCalculatedLineItemTax"]:c11(),["OrderLineItem"]:c12(),["OrderLineItemModifier"]:c13(),["OrderLineSubscriptionOfferDiscount"]:c14(),["OrderLineSubscriptionOfferSummary"]:c15(),["PurchasedGiftCard"]:c16(),["SelectedProductOption"]:c17(),["SharedCodec247"]:c18(),["SharedCodec479"]:c19(),["SignedMoney"]:c20(),["SubscribedLine"]:c21(),["SubscriptionIntervalOption"]:c22(),["TaxCalculationRequest"]:c23(),["TaxComponentRequest"]:c24(),["TaxJurisdiction"]:c25(),["TextModifierRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
