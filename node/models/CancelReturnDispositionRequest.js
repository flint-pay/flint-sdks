import { d128 as c0 } from '../descriptors/data/6.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d128 as d128 } from '../descriptors/data/6.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d128;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CancelReturnDispositionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelReturnDispositionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
