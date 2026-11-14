import { d8558 as c0 } from '../descriptors/data/419.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8565 as c1, d8566 as c2 } from '../descriptors/data/420.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8558 as d8558 } from '../descriptors/data/419.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8558;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RiskPredicateNodeInRequest"]:c0(),["SharedCodec413"]:c1(),["SharedCodec414"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeInRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
