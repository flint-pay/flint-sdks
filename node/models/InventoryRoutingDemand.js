import { d787 as c0 } from '../descriptors/data/41.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d787 as d787 } from '../descriptors/data/41.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d787;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryRoutingDemand"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryRoutingDemand(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
