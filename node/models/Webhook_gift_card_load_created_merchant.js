import { d831 as c0, d832 as c1, d325 as c2, d835 as c3, d847 as c4, d848 as c5, d849 as c6, d850 as c7, d851 as c8, d853 as c9, d859 as c10, d872 as c11, d314 as c12, d324 as c13, d323 as c14, d469 as c15, d834 as c16, d858 as c17, d871 as c18, d318 as c19, d317 as c20, d319 as c21, d320 as c22, d321 as c23, d322 as c24, d1381 as c25 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1381 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1381;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingDispute"]:c0(),["GiftCardFundingLossResolution"]:c1(),["GiftCardFundingSource"]:c2(),["GiftCardLoad"]:c3(),["GiftCardPurchaseRefundAllocation"]:c4(),["GiftCardPurchaseRefundRecovery"]:c5(),["GiftCardPurchaseRefundRecoveryDestination"]:c6(),["GiftCardPurchaseRefundValueAllocation"]:c7(),["GiftCardPurchaseRefundValueHold"]:c8(),["GiftCardPurchaseRestoration"]:c9(),["GiftCardRefundProvenance"]:c10(),["MerchantWebhookEnvelope"]:c11(),["MoneyValue"]:c12(),["SharedCodec100"]:c13(),["SharedCodec101"]:c14(),["SharedCodec161"]:c15(),["SharedCodec235"]:c16(),["SharedCodec236"]:c17(),["SharedCodec237"]:c18(),["SharedCodec94"]:c19(),["SharedCodec95"]:c20(),["SharedCodec96"]:c21(),["SharedCodec97"]:c22(),["SharedCodec98"]:c23(),["SharedCodec99"]:c24(),["Webhook_gift_card_load_created_merchant"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_load_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
