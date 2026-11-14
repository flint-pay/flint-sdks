import { d700 as c0 } from '../descriptors/data/38.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6916 as c1 } from '../descriptors/data/323.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6922 as c2 } from '../descriptors/data/324.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d700 as d700 } from '../descriptors/data/38.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d700;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceImportRequest"]:c0(),["SharedCodec280"]:c1(),["SharedCodec286"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceImportRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
