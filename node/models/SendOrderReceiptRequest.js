import { d1443 as c0 } from '../descriptors/data/68.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1443 as d1443 } from '../descriptors/data/68.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1443;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SendOrderReceiptRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSendOrderReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
