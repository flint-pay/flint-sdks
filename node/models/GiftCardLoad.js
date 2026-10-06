import { d885 as c0, d364 as c1, d893 as c2, d907 as c3, d909 as c4, d910 as c5, d911 as c6, d77 as c7, d357 as c8, d356 as c9, d358 as c10, d359 as c11, d360 as c12, d361 as c13, d363 as c14, d362 as c15, d884 as c16, d888 as c17, d889 as c18, d891 as c19, d890 as c20, d892 as c21, d906 as c22, d41 as c23 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d893 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d893;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingDispute"]:c0(),["GiftCardFundingSource"]:c1(),["GiftCardLoad"]:c2(),["GiftCardPurchaseRefundAllocation"]:c3(),["GiftCardPurchaseRefundRecoveryDestination"]:c4(),["GiftCardPurchaseRefundValueAllocation"]:c5(),["GiftCardPurchaseRefundValueHold"]:c6(),["MoneyValue"]:c7(),["SharedCodec120"]:c8(),["SharedCodec121"]:c9(),["SharedCodec122"]:c10(),["SharedCodec123"]:c11(),["SharedCodec124"]:c12(),["SharedCodec125"]:c13(),["SharedCodec126"]:c14(),["SharedCodec127"]:c15(),["SharedCodec273"]:c16(),["SharedCodec274"]:c17(),["SharedCodec275"]:c18(),["SharedCodec276"]:c19(),["SharedCodec277"]:c20(),["SharedCodec278"]:c21(),["SharedCodec281"]:c22(),["SharedCodec6"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardLoad(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
