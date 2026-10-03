import { d863 as c0, d353 as c1, d872 as c2, d342 as c3, d886 as c4, d888 as c5, d889 as c6, d890 as c7, d346 as c8, d345 as c9, d347 as c10, d348 as c11, d349 as c12, d350 as c13, d352 as c14, d351 as c15, d857 as c16, d862 as c17, d867 as c18, d868 as c19, d870 as c20, d869 as c21, d871 as c22, d885 as c23 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d872 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d872;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingDispute"]:c0(),["GiftCardFundingSource"]:c1(),["GiftCardLoad"]:c2(),["GiftCardMoney"]:c3(),["GiftCardPurchaseRefundAllocation"]:c4(),["GiftCardPurchaseRefundRecoveryDestination"]:c5(),["GiftCardPurchaseRefundValueAllocation"]:c6(),["GiftCardPurchaseRefundValueHold"]:c7(),["SharedCodec117"]:c8(),["SharedCodec118"]:c9(),["SharedCodec119"]:c10(),["SharedCodec120"]:c11(),["SharedCodec121"]:c12(),["SharedCodec122"]:c13(),["SharedCodec123"]:c14(),["SharedCodec124"]:c15(),["SharedCodec265"]:c16(),["SharedCodec266"]:c17(),["SharedCodec267"]:c18(),["SharedCodec268"]:c19(),["SharedCodec269"]:c20(),["SharedCodec270"]:c21(),["SharedCodec271"]:c22(),["SharedCodec274"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardLoad(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
