import { d339 as c0 } from '../descriptors/data/21.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8307 as c1 } from '../descriptors/data/403.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8308 as c2 } from '../descriptors/data/404.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d339 as d339 } from '../descriptors/data/21.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d339;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReportRequest"]:c0(),["SharedCodec394"]:c1(),["SharedCodec395"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReportRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
