import { d865 as c0, d355 as c1, d874 as c2, d344 as c3, d888 as c4, d890 as c5, d891 as c6, d892 as c7, d348 as c8, d347 as c9, d349 as c10, d350 as c11, d351 as c12, d352 as c13, d354 as c14, d353 as c15, d859 as c16, d864 as c17, d869 as c18, d870 as c19, d872 as c20, d871 as c21, d873 as c22, d887 as c23 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d874 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d874;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingDispute"]:c0(),["GiftCardFundingSource"]:c1(),["GiftCardLoad"]:c2(),["GiftCardMoney"]:c3(),["GiftCardPurchaseRefundAllocation"]:c4(),["GiftCardPurchaseRefundRecoveryDestination"]:c5(),["GiftCardPurchaseRefundValueAllocation"]:c6(),["GiftCardPurchaseRefundValueHold"]:c7(),["SharedCodec117"]:c8(),["SharedCodec118"]:c9(),["SharedCodec119"]:c10(),["SharedCodec120"]:c11(),["SharedCodec121"]:c12(),["SharedCodec122"]:c13(),["SharedCodec123"]:c14(),["SharedCodec124"]:c15(),["SharedCodec265"]:c16(),["SharedCodec266"]:c17(),["SharedCodec267"]:c18(),["SharedCodec268"]:c19(),["SharedCodec269"]:c20(),["SharedCodec270"]:c21(),["SharedCodec271"]:c22(),["SharedCodec274"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardLoad(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
