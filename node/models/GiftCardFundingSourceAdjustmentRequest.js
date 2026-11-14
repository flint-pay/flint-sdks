import { d688 as c0 } from '../descriptors/data/38.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d688 as d688 } from '../descriptors/data/38.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d688;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceAdjustmentRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceAdjustmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
