import { d118 as c0 } from '../descriptors/data/5.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6621 as c1, d6622 as c2, d6627 as c3, d6628 as c4 } from '../descriptors/data/304.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d118 as d118 } from '../descriptors/data/5.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d118;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryOutcomeRequestUnavailable"]:c0(),["SharedCodec128"]:c1(),["SharedCodec129"]:c2(),["SharedCodec134"]:c3(),["SharedCodec135"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryOutcomeRequestUnavailable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
