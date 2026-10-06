import { d872 as c0, d359 as c1, d880 as c2, d894 as c3, d896 as c4, d897 as c5, d898 as c6, d77 as c7, d352 as c8, d351 as c9, d353 as c10, d354 as c11, d355 as c12, d356 as c13, d358 as c14, d357 as c15, d871 as c16, d875 as c17, d876 as c18, d878 as c19, d877 as c20, d879 as c21, d893 as c22, d41 as c23 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d880 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d880;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingDispute"]:c0(),["GiftCardFundingSource"]:c1(),["GiftCardLoad"]:c2(),["GiftCardPurchaseRefundAllocation"]:c3(),["GiftCardPurchaseRefundRecoveryDestination"]:c4(),["GiftCardPurchaseRefundValueAllocation"]:c5(),["GiftCardPurchaseRefundValueHold"]:c6(),["MoneyValue"]:c7(),["SharedCodec120"]:c8(),["SharedCodec121"]:c9(),["SharedCodec122"]:c10(),["SharedCodec123"]:c11(),["SharedCodec124"]:c12(),["SharedCodec125"]:c13(),["SharedCodec126"]:c14(),["SharedCodec127"]:c15(),["SharedCodec272"]:c16(),["SharedCodec273"]:c17(),["SharedCodec274"]:c18(),["SharedCodec275"]:c19(),["SharedCodec276"]:c20(),["SharedCodec277"]:c21(),["SharedCodec280"]:c22(),["SharedCodec6"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardLoad(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
