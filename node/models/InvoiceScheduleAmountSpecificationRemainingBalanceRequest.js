import { d910 as c0 } from '../descriptors/data/45.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c1 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6237 as c2, d6238 as c3 } from '../descriptors/data/283.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d910 as d910 } from '../descriptors/data/45.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d910;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRemainingBalanceRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec968"]:c2(),["SharedCodec969"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleAmountSpecificationRemainingBalanceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
