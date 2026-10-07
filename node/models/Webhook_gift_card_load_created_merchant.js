import { d885 as c0, d364 as c1, d893 as c2, d907 as c3, d909 as c4, d910 as c5, d911 as c6, d930 as c7, d77 as c8, d357 as c9, d356 as c10, d358 as c11, d359 as c12, d360 as c13, d361 as c14, d363 as c15, d362 as c16, d525 as c17, d884 as c18, d888 as c19, d889 as c20, d891 as c21, d890 as c22, d892 as c23, d906 as c24, d929 as c25, d41 as c26, d1439 as c27 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1439 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1439;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingDispute"]:c0(),["GiftCardFundingSource"]:c1(),["GiftCardLoad"]:c2(),["GiftCardPurchaseRefundAllocation"]:c3(),["GiftCardPurchaseRefundRecoveryDestination"]:c4(),["GiftCardPurchaseRefundValueAllocation"]:c5(),["GiftCardPurchaseRefundValueHold"]:c6(),["MerchantWebhookEnvelope"]:c7(),["MoneyValue"]:c8(),["SharedCodec120"]:c9(),["SharedCodec121"]:c10(),["SharedCodec122"]:c11(),["SharedCodec123"]:c12(),["SharedCodec124"]:c13(),["SharedCodec125"]:c14(),["SharedCodec126"]:c15(),["SharedCodec127"]:c16(),["SharedCodec199"]:c17(),["SharedCodec273"]:c18(),["SharedCodec274"]:c19(),["SharedCodec275"]:c20(),["SharedCodec276"]:c21(),["SharedCodec277"]:c22(),["SharedCodec278"]:c23(),["SharedCodec281"]:c24(),["SharedCodec282"]:c25(),["SharedCodec6"]:c26(),["Webhook_gift_card_load_created_merchant"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_load_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
