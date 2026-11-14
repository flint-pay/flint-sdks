import { d7938 as c0 } from '../descriptors/data/380.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c1 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6899 as c2 } from '../descriptors/data/322.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8289 as c3 } from '../descriptors/data/402.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7938 as d7938 } from '../descriptors/data/380.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7938;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CapturePaymentSplitRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec142"]:c2(),["SplitReversalRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCapturePaymentSplitRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
