import { d7523 as c0 } from '../descriptors/data/358.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6880 as c1 } from '../descriptors/data/321.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7523 as d7523 } from '../descriptors/data/358.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7523;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnResolutionLineItemRequest"]:c0(),["ReturnShipmentLineItemAllocationRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnResolutionLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
