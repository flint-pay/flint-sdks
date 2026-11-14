import { d7160 as c0, d7161 as c1 } from '../descriptors/data/335.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d919 as c2 } from '../descriptors/data/46.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c3 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6232 as c4, d6233 as c5, d6234 as c6, d6235 as c7, d6236 as c8, d6237 as c9, d6238 as c10 } from '../descriptors/data/283.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7210 as c11, d7211 as c12, d7212 as c13, d7213 as c14, d7214 as c15 } from '../descriptors/data/337.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7217 as c16, d7218 as c17, d7220 as c18, d7222 as c19, d7223 as c20 } from '../descriptors/data/338.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d919 as d919 } from '../descriptors/data/46.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d919;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWriteInstallment"]:c2(),["MoneyValue"]:c3(),["SharedCodec963"]:c4(),["SharedCodec964"]:c5(),["SharedCodec965"]:c6(),["SharedCodec966"]:c7(),["SharedCodec967"]:c8(),["SharedCodec968"]:c9(),["SharedCodec969"]:c10(),["SharedCodec973"]:c11(),["SharedCodec974"]:c12(),["SharedCodec975"]:c13(),["SharedCodec976"]:c14(),["SharedCodec977"]:c15(),["SharedCodec980"]:c16(),["SharedCodec981"]:c17(),["SharedCodec983"]:c18(),["SharedCodec985"]:c19(),["SharedCodec986"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWriteInstallment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
