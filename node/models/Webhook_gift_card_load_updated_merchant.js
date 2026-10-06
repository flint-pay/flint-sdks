import { d872 as c0, d359 as c1, d880 as c2, d894 as c3, d896 as c4, d897 as c5, d898 as c6, d916 as c7, d77 as c8, d352 as c9, d351 as c10, d353 as c11, d354 as c12, d355 as c13, d356 as c14, d358 as c15, d357 as c16, d520 as c17, d871 as c18, d875 as c19, d876 as c20, d878 as c21, d877 as c22, d879 as c23, d893 as c24, d915 as c25, d41 as c26, d1154 as c27 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1154 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1154;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingDispute"]:c0(),["GiftCardFundingSource"]:c1(),["GiftCardLoad"]:c2(),["GiftCardPurchaseRefundAllocation"]:c3(),["GiftCardPurchaseRefundRecoveryDestination"]:c4(),["GiftCardPurchaseRefundValueAllocation"]:c5(),["GiftCardPurchaseRefundValueHold"]:c6(),["MerchantWebhookEnvelope"]:c7(),["MoneyValue"]:c8(),["SharedCodec120"]:c9(),["SharedCodec121"]:c10(),["SharedCodec122"]:c11(),["SharedCodec123"]:c12(),["SharedCodec124"]:c13(),["SharedCodec125"]:c14(),["SharedCodec126"]:c15(),["SharedCodec127"]:c16(),["SharedCodec199"]:c17(),["SharedCodec272"]:c18(),["SharedCodec273"]:c19(),["SharedCodec274"]:c20(),["SharedCodec275"]:c21(),["SharedCodec276"]:c22(),["SharedCodec277"]:c23(),["SharedCodec280"]:c24(),["SharedCodec281"]:c25(),["SharedCodec6"]:c26(),["Webhook_gift_card_load_updated_merchant"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_load_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
