import { d319 as c0 } from '../descriptors/data/19.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5918 as c1 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c2 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7822 as c3 } from '../descriptors/data/373.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6129 as c4 } from '../descriptors/data/278.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6899 as c5 } from '../descriptors/data/322.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7831 as c6, d7832 as c7, d7833 as c8 } from '../descriptors/data/374.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7964 as c9, d7965 as c10, d7966 as c11, d7967 as c12, d7968 as c13, d7969 as c14 } from '../descriptors/data/382.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d319 as d319 } from '../descriptors/data/19.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d319;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePaymentIntentRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["PaymentSplitRequest"]:c3(),["PlatformFeeRequest"]:c4(),["SharedCodec142"]:c5(),["SharedCodec357"]:c6(),["SharedCodec358"]:c7(),["SharedCodec359"]:c8(),["SharedCodec370"]:c9(),["SharedCodec371"]:c10(),["SharedCodec372"]:c11(),["SharedCodec373"]:c12(),["SharedCodec374"]:c13(),["SharedCodec375"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
