import { d857 as c0, d858 as c1, d334 as c2, d861 as c3, d873 as c4, d874 as c5, d875 as c6, d876 as c7, d877 as c8, d879 as c9, d885 as c10, d323 as c11, d330 as c12, d331 as c13, d333 as c14, d332 as c15, d860 as c16, d884 as c17, d327 as c18, d326 as c19, d328 as c20, d329 as c21 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d861 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d861;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingDispute"]:c0(),["GiftCardFundingLossResolution"]:c1(),["GiftCardFundingSource"]:c2(),["GiftCardLoad"]:c3(),["GiftCardPurchaseRefundAllocation"]:c4(),["GiftCardPurchaseRefundRecovery"]:c5(),["GiftCardPurchaseRefundRecoveryDestination"]:c6(),["GiftCardPurchaseRefundValueAllocation"]:c7(),["GiftCardPurchaseRefundValueHold"]:c8(),["GiftCardPurchaseRestoration"]:c9(),["GiftCardRefundProvenance"]:c10(),["MoneyValue"]:c11(),["SharedCodec100"]:c12(),["SharedCodec101"]:c13(),["SharedCodec102"]:c14(),["SharedCodec103"]:c15(),["SharedCodec248"]:c16(),["SharedCodec249"]:c17(),["SharedCodec96"]:c18(),["SharedCodec97"]:c19(),["SharedCodec98"]:c20(),["SharedCodec99"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardLoad(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
