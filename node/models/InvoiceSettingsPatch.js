import { d7265 as c0 } from '../descriptors/data/340.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8652 as c1 } from '../descriptors/data/423.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d922 as c2 } from '../descriptors/data/46.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c3 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6018 as c4, d6019 as c5 } from '../descriptors/data/271.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6314 as c6, d6315 as c13 } from '../descriptors/data/287.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8629 as c7, d8630 as c8, d8631 as c9, d8632 as c10, d8633 as c11, d8634 as c12 } from '../descriptors/data/422.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d922 as d922 } from '../descriptors/data/46.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d922;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentOptionLimitRequest"]:c0(),["InvoiceReminderRule"]:c1(),["InvoiceSettingsPatch"]:c2(),["MoneyValue"]:c3(),["SharedCodec0"]:c4(),["SharedCodec1"]:c5(),["SharedCodec1000"]:c6(),["SharedCodec993"]:c7(),["SharedCodec994"]:c8(),["SharedCodec995"]:c9(),["SharedCodec996"]:c10(),["SharedCodec997"]:c11(),["SharedCodec998"]:c12(),["SharedCodec999"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceSettingsPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
