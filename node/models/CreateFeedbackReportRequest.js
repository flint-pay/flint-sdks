import { d249 as c0 } from '../descriptors/data/12.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6795 as c1, d6799 as c2, d6800 as c3 } from '../descriptors/data/315.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d249 as d249 } from '../descriptors/data/12.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d249;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateFeedbackReportRequest"]:c0(),["FeedbackReportingClientRequest"]:c1(),["SharedCodec267"]:c2(),["SharedCodec268"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFeedbackReportRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
