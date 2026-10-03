import { d863 as c0, d353 as c1, d342 as c2, d886 as c3, d888 as c4, d889 as c5, d890 as c6, d917 as c7, d346 as c8, d345 as c9, d347 as c10, d348 as c11, d349 as c12, d350 as c13, d352 as c14, d351 as c15, d857 as c16, d862 as c17, d867 as c18, d868 as c19, d870 as c20, d869 as c21, d871 as c22, d885 as c23, d916 as c24, d1148 as c25, d1408 as c26 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1408 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1408;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingDispute"]:c0(),["GiftCardFundingSource"]:c1(),["GiftCardMoney"]:c2(),["GiftCardPurchaseRefundAllocation"]:c3(),["GiftCardPurchaseRefundRecoveryDestination"]:c4(),["GiftCardPurchaseRefundValueAllocation"]:c5(),["GiftCardPurchaseRefundValueHold"]:c6(),["PartnerWebhookEnvelope"]:c7(),["SharedCodec117"]:c8(),["SharedCodec118"]:c9(),["SharedCodec119"]:c10(),["SharedCodec120"]:c11(),["SharedCodec121"]:c12(),["SharedCodec122"]:c13(),["SharedCodec123"]:c14(),["SharedCodec124"]:c15(),["SharedCodec265"]:c16(),["SharedCodec266"]:c17(),["SharedCodec267"]:c18(),["SharedCodec268"]:c19(),["SharedCodec269"]:c20(),["SharedCodec270"]:c21(),["SharedCodec271"]:c22(),["SharedCodec274"]:c23(),["SharedCodec280"]:c24(),["SharedCodec335"]:c25(),["Webhook_gift_card_load_created_installed_merchants"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_load_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
