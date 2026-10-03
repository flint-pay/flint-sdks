import { d863 as c0, d353 as c1, d872 as c2, d342 as c3, d886 as c4, d888 as c5, d889 as c6, d890 as c7, d909 as c8, d346 as c9, d345 as c10, d347 as c11, d348 as c12, d349 as c13, d350 as c14, d352 as c15, d351 as c16, d515 as c17, d857 as c18, d862 as c19, d867 as c20, d868 as c21, d870 as c22, d869 as c23, d871 as c24, d885 as c25, d908 as c26, d1147 as c27 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1147 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1147;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingDispute"]:c0(),["GiftCardFundingSource"]:c1(),["GiftCardLoad"]:c2(),["GiftCardMoney"]:c3(),["GiftCardPurchaseRefundAllocation"]:c4(),["GiftCardPurchaseRefundRecoveryDestination"]:c5(),["GiftCardPurchaseRefundValueAllocation"]:c6(),["GiftCardPurchaseRefundValueHold"]:c7(),["MerchantWebhookEnvelope"]:c8(),["SharedCodec117"]:c9(),["SharedCodec118"]:c10(),["SharedCodec119"]:c11(),["SharedCodec120"]:c12(),["SharedCodec121"]:c13(),["SharedCodec122"]:c14(),["SharedCodec123"]:c15(),["SharedCodec124"]:c16(),["SharedCodec197"]:c17(),["SharedCodec265"]:c18(),["SharedCodec266"]:c19(),["SharedCodec267"]:c20(),["SharedCodec268"]:c21(),["SharedCodec269"]:c22(),["SharedCodec270"]:c23(),["SharedCodec271"]:c24(),["SharedCodec274"]:c25(),["SharedCodec275"]:c26(),["Webhook_gift_card_load_updated_merchant"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_load_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
