import { d7045 as c0, d7046 as c1 } from '../descriptors/data/329.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7045 as d7045 } from '../descriptors/data/329.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7045;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryBackorderPolicyRequest"]:c0(),["InventoryBackorderPolicyRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryBackorderPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
