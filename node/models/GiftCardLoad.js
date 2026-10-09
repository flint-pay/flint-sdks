import { d852 as c0, d853 as c1, d334 as c2, d856 as c3, d868 as c4, d869 as c5, d870 as c6, d871 as c7, d872 as c8, d874 as c9, d880 as c10, d323 as c11, d330 as c12, d331 as c13, d333 as c14, d332 as c15, d855 as c16, d879 as c17, d327 as c18, d326 as c19, d328 as c20, d329 as c21 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d856 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d856;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingDispute"]:c0(),["GiftCardFundingLossResolution"]:c1(),["GiftCardFundingSource"]:c2(),["GiftCardLoad"]:c3(),["GiftCardPurchaseRefundAllocation"]:c4(),["GiftCardPurchaseRefundRecovery"]:c5(),["GiftCardPurchaseRefundRecoveryDestination"]:c6(),["GiftCardPurchaseRefundValueAllocation"]:c7(),["GiftCardPurchaseRefundValueHold"]:c8(),["GiftCardPurchaseRestoration"]:c9(),["GiftCardRefundProvenance"]:c10(),["MoneyValue"]:c11(),["SharedCodec100"]:c12(),["SharedCodec101"]:c13(),["SharedCodec102"]:c14(),["SharedCodec103"]:c15(),["SharedCodec244"]:c16(),["SharedCodec245"]:c17(),["SharedCodec96"]:c18(),["SharedCodec97"]:c19(),["SharedCodec98"]:c20(),["SharedCodec99"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardLoad(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
