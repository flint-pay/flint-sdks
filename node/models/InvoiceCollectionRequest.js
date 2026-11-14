import { d7154 as c0, d7159 as c2 } from '../descriptors/data/335.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7265 as c1 } from '../descriptors/data/340.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c3 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6214 as c4, d6215 as c5 } from '../descriptors/data/282.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7194 as c6, d7195 as c7, d7196 as c8, d7197 as c9, d7198 as c10, d7199 as c11, d7200 as c12 } from '../descriptors/data/337.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7154 as d7154 } from '../descriptors/data/335.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7154;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceCollectionRequest"]:c0(),["InvoicePaymentOptionLimitRequest"]:c1(),["InvoicePaymentPolicyRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec867"]:c4(),["SharedCodec868"]:c5(),["SharedCodec874"]:c6(),["SharedCodec875"]:c7(),["SharedCodec876"]:c8(),["SharedCodec877"]:c9(),["SharedCodec878"]:c10(),["SharedCodec879"]:c11(),["SharedCodec880"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceCollectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
