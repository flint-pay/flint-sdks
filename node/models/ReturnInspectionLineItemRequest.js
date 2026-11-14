import { d8466 as c0 } from '../descriptors/data/414.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8466 as d8466 } from '../descriptors/data/414.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8466;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnInspectionLineItemRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnInspectionLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
