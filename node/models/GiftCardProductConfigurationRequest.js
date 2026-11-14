import { d8142 as c0, d8144 as c1 } from '../descriptors/data/394.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c2 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8144 as d8144 } from '../descriptors/data/394.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8144;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBoundsRequest"]:c0(),["GiftCardProductConfigurationRequest"]:c1(),["MoneyValue"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardProductConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
