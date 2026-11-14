import { d703 as c0 } from '../descriptors/data/39.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6930 as c1 } from '../descriptors/data/324.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d703 as d703 } from '../descriptors/data/39.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d703;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceStoreCreditRequest"]:c0(),["SharedCodec294"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceStoreCreditRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
