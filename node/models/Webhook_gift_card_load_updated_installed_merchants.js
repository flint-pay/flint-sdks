import { d891 as c0, d365 as c1, d913 as c2, d915 as c3, d916 as c4, d917 as c5, d77 as c6, d944 as c7, d358 as c8, d357 as c9, d359 as c10, d360 as c11, d361 as c12, d362 as c13, d364 as c14, d363 as c15, d890 as c16, d894 as c17, d895 as c18, d897 as c19, d896 as c20, d898 as c21, d912 as c22, d943 as c23, d1179 as c24, d41 as c25, d1180 as c26 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1180 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1180;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingDispute"]:c0(),["GiftCardFundingSource"]:c1(),["GiftCardPurchaseRefundAllocation"]:c2(),["GiftCardPurchaseRefundRecoveryDestination"]:c3(),["GiftCardPurchaseRefundValueAllocation"]:c4(),["GiftCardPurchaseRefundValueHold"]:c5(),["MoneyValue"]:c6(),["PartnerWebhookEnvelope"]:c7(),["SharedCodec120"]:c8(),["SharedCodec121"]:c9(),["SharedCodec122"]:c10(),["SharedCodec123"]:c11(),["SharedCodec124"]:c12(),["SharedCodec125"]:c13(),["SharedCodec126"]:c14(),["SharedCodec127"]:c15(),["SharedCodec277"]:c16(),["SharedCodec278"]:c17(),["SharedCodec279"]:c18(),["SharedCodec280"]:c19(),["SharedCodec281"]:c20(),["SharedCodec282"]:c21(),["SharedCodec285"]:c22(),["SharedCodec291"]:c23(),["SharedCodec347"]:c24(),["SharedCodec6"]:c25(),["Webhook_gift_card_load_updated_installed_merchants"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_load_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
