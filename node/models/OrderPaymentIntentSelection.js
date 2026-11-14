import { d7717 as c0, d7729 as c2, d7730 as c3, d7731 as c4, d7732 as c5, d7733 as c6 } from '../descriptors/data/369.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7823 as c1 } from '../descriptors/data/373.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7717 as d7717 } from '../descriptors/data/369.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7717;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderPaymentIntentSelection"]:c0(),["ReaderPaymentSourceTip"]:c1(),["SharedCodec1088"]:c2(),["SharedCodec1089"]:c3(),["SharedCodec1090"]:c4(),["SharedCodec1091"]:c5(),["SharedCodec1092"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderPaymentIntentSelection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
