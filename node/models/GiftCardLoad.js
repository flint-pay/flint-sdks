import { d831 as c0, d832 as c1, d325 as c2, d835 as c3, d847 as c4, d848 as c5, d849 as c6, d850 as c7, d851 as c8, d853 as c9, d859 as c10, d314 as c11, d324 as c12, d323 as c13, d834 as c14, d858 as c15, d318 as c16, d317 as c17, d319 as c18, d320 as c19, d321 as c20, d322 as c21 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d835 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d835;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingDispute"]:c0(),["GiftCardFundingLossResolution"]:c1(),["GiftCardFundingSource"]:c2(),["GiftCardLoad"]:c3(),["GiftCardPurchaseRefundAllocation"]:c4(),["GiftCardPurchaseRefundRecovery"]:c5(),["GiftCardPurchaseRefundRecoveryDestination"]:c6(),["GiftCardPurchaseRefundValueAllocation"]:c7(),["GiftCardPurchaseRefundValueHold"]:c8(),["GiftCardPurchaseRestoration"]:c9(),["GiftCardRefundProvenance"]:c10(),["MoneyValue"]:c11(),["SharedCodec100"]:c12(),["SharedCodec101"]:c13(),["SharedCodec235"]:c14(),["SharedCodec236"]:c15(),["SharedCodec94"]:c16(),["SharedCodec95"]:c17(),["SharedCodec96"]:c18(),["SharedCodec97"]:c19(),["SharedCodec98"]:c20(),["SharedCodec99"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardLoad(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
