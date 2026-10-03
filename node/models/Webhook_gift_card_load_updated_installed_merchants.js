import { d865 as c0, d355 as c1, d344 as c2, d888 as c3, d890 as c4, d891 as c5, d892 as c6, d919 as c7, d348 as c8, d347 as c9, d349 as c10, d350 as c11, d351 as c12, d352 as c13, d354 as c14, d353 as c15, d859 as c16, d864 as c17, d869 as c18, d870 as c19, d872 as c20, d871 as c21, d873 as c22, d887 as c23, d918 as c24, d1150 as c25, d1151 as c26 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1151 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1151;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingDispute"]:c0(),["GiftCardFundingSource"]:c1(),["GiftCardMoney"]:c2(),["GiftCardPurchaseRefundAllocation"]:c3(),["GiftCardPurchaseRefundRecoveryDestination"]:c4(),["GiftCardPurchaseRefundValueAllocation"]:c5(),["GiftCardPurchaseRefundValueHold"]:c6(),["PartnerWebhookEnvelope"]:c7(),["SharedCodec117"]:c8(),["SharedCodec118"]:c9(),["SharedCodec119"]:c10(),["SharedCodec120"]:c11(),["SharedCodec121"]:c12(),["SharedCodec122"]:c13(),["SharedCodec123"]:c14(),["SharedCodec124"]:c15(),["SharedCodec265"]:c16(),["SharedCodec266"]:c17(),["SharedCodec267"]:c18(),["SharedCodec268"]:c19(),["SharedCodec269"]:c20(),["SharedCodec270"]:c21(),["SharedCodec271"]:c22(),["SharedCodec274"]:c23(),["SharedCodec280"]:c24(),["SharedCodec335"]:c25(),["Webhook_gift_card_load_updated_installed_merchants"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_load_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
