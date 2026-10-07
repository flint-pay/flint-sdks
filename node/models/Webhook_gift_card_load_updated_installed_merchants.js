import { d831 as c0, d832 as c1, d325 as c2, d847 as c3, d848 as c4, d849 as c5, d850 as c6, d851 as c7, d853 as c8, d859 as c9, d314 as c10, d880 as c11, d324 as c12, d323 as c13, d834 as c14, d858 as c15, d879 as c16, d1115 as c17, d318 as c18, d317 as c19, d319 as c20, d320 as c21, d321 as c22, d322 as c23, d1116 as c24 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1116 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1116;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingDispute"]:c0(),["GiftCardFundingLossResolution"]:c1(),["GiftCardFundingSource"]:c2(),["GiftCardPurchaseRefundAllocation"]:c3(),["GiftCardPurchaseRefundRecovery"]:c4(),["GiftCardPurchaseRefundRecoveryDestination"]:c5(),["GiftCardPurchaseRefundValueAllocation"]:c6(),["GiftCardPurchaseRefundValueHold"]:c7(),["GiftCardPurchaseRestoration"]:c8(),["GiftCardRefundProvenance"]:c9(),["MoneyValue"]:c10(),["PartnerWebhookEnvelope"]:c11(),["SharedCodec100"]:c12(),["SharedCodec101"]:c13(),["SharedCodec235"]:c14(),["SharedCodec236"]:c15(),["SharedCodec242"]:c16(),["SharedCodec298"]:c17(),["SharedCodec94"]:c18(),["SharedCodec95"]:c19(),["SharedCodec96"]:c20(),["SharedCodec97"]:c21(),["SharedCodec98"]:c22(),["SharedCodec99"]:c23(),["Webhook_gift_card_load_updated_installed_merchants"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_load_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
