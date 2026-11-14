import { d696 as c0 } from '../descriptors/data/38.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6927 as c1, d6928 as c2 } from '../descriptors/data/324.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d696 as d696 } from '../descriptors/data/38.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d696;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequest"]:c0(),["SharedCodec291"]:c1(),["SharedCodec292"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
