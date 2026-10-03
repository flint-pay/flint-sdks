import { d865 as c0, d355 as c1, d874 as c2, d344 as c3, d888 as c4, d890 as c5, d891 as c6, d892 as c7, d911 as c8, d348 as c9, d347 as c10, d349 as c11, d350 as c12, d351 as c13, d352 as c14, d354 as c15, d353 as c16, d517 as c17, d859 as c18, d864 as c19, d869 as c20, d870 as c21, d872 as c22, d871 as c23, d873 as c24, d887 as c25, d910 as c26, d1409 as c27 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1409 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1409;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingDispute"]:c0(),["GiftCardFundingSource"]:c1(),["GiftCardLoad"]:c2(),["GiftCardMoney"]:c3(),["GiftCardPurchaseRefundAllocation"]:c4(),["GiftCardPurchaseRefundRecoveryDestination"]:c5(),["GiftCardPurchaseRefundValueAllocation"]:c6(),["GiftCardPurchaseRefundValueHold"]:c7(),["MerchantWebhookEnvelope"]:c8(),["SharedCodec117"]:c9(),["SharedCodec118"]:c10(),["SharedCodec119"]:c11(),["SharedCodec120"]:c12(),["SharedCodec121"]:c13(),["SharedCodec122"]:c14(),["SharedCodec123"]:c15(),["SharedCodec124"]:c16(),["SharedCodec197"]:c17(),["SharedCodec265"]:c18(),["SharedCodec266"]:c19(),["SharedCodec267"]:c20(),["SharedCodec268"]:c21(),["SharedCodec269"]:c22(),["SharedCodec270"]:c23(),["SharedCodec271"]:c24(),["SharedCodec274"]:c25(),["SharedCodec275"]:c26(),["Webhook_gift_card_load_created_merchant"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_load_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
