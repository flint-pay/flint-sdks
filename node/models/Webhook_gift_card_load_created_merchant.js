import { d891 as c0, d365 as c1, d899 as c2, d913 as c3, d915 as c4, d916 as c5, d917 as c6, d936 as c7, d77 as c8, d358 as c9, d357 as c10, d359 as c11, d360 as c12, d361 as c13, d362 as c14, d364 as c15, d363 as c16, d526 as c17, d890 as c18, d894 as c19, d895 as c20, d897 as c21, d896 as c22, d898 as c23, d912 as c24, d935 as c25, d41 as c26, d1445 as c27 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1445 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1445;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingDispute"]:c0(),["GiftCardFundingSource"]:c1(),["GiftCardLoad"]:c2(),["GiftCardPurchaseRefundAllocation"]:c3(),["GiftCardPurchaseRefundRecoveryDestination"]:c4(),["GiftCardPurchaseRefundValueAllocation"]:c5(),["GiftCardPurchaseRefundValueHold"]:c6(),["MerchantWebhookEnvelope"]:c7(),["MoneyValue"]:c8(),["SharedCodec120"]:c9(),["SharedCodec121"]:c10(),["SharedCodec122"]:c11(),["SharedCodec123"]:c12(),["SharedCodec124"]:c13(),["SharedCodec125"]:c14(),["SharedCodec126"]:c15(),["SharedCodec127"]:c16(),["SharedCodec199"]:c17(),["SharedCodec277"]:c18(),["SharedCodec278"]:c19(),["SharedCodec279"]:c20(),["SharedCodec280"]:c21(),["SharedCodec281"]:c22(),["SharedCodec282"]:c23(),["SharedCodec285"]:c24(),["SharedCodec286"]:c25(),["SharedCodec6"]:c26(),["Webhook_gift_card_load_created_merchant"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_load_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
