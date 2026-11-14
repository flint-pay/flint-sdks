import { d152 as c0 } from '../descriptors/data/7.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d152 as d152 } from '../descriptors/data/7.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d152;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckInTicketRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckInTicketRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
