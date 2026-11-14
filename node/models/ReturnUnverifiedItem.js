import { d8431 as c0 } from '../descriptors/data/412.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8431 as d8431 } from '../descriptors/data/412.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8431;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnUnverifiedItem"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnUnverifiedItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
