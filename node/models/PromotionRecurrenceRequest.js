import { d8209 as c0 } from '../descriptors/data/398.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7492 as c1 } from '../descriptors/data/356.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7493 as c2, d7494 as c3, d7495 as c4, d7496 as c5 } from '../descriptors/data/357.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8209 as d8209 } from '../descriptors/data/398.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8209;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrenceRequest"]:c0(),["SharedCodec1350"]:c1(),["SharedCodec1351"]:c2(),["SharedCodec1352"]:c3(),["SharedCodec1353"]:c4(),["SharedCodec1354"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrenceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
