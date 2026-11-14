import { d5727 as c0 } from '../descriptors/data/253.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5727 as d5727 } from '../descriptors/data/253.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5727;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateTicketRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateTicketRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
