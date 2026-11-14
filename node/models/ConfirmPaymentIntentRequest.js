import { d187 as c0 } from '../descriptors/data/8.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7823 as c1 } from '../descriptors/data/373.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7945 as c2, d7946 as c3, d7947 as c4, d7948 as c5, d7949 as c6, d7952 as c8 } from '../descriptors/data/381.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7827 as c7 } from '../descriptors/data/374.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d187 as d187 } from '../descriptors/data/8.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d187;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmPaymentIntentRequest"]:c0(),["ReaderPaymentSourceTip"]:c1(),["SharedCodec183"]:c2(),["SharedCodec184"]:c3(),["SharedCodec185"]:c4(),["SharedCodec186"]:c5(),["SharedCodec187"]:c6(),["SharedCodec188"]:c7(),["SharedCodec189"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmPaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
