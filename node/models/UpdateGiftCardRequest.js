import { d5664 as c0 } from '../descriptors/data/247.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5664 as d5664 } from '../descriptors/data/247.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5664;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateGiftCardRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
