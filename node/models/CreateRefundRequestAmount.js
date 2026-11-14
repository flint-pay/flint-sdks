import { d334 as c0 } from '../descriptors/data/20.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5918 as c1 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c2 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8258 as c3, d8259 as c4, d8261 as c7, d8262 as c8, d8263 as c9, d8264 as c10, d8265 as c11 } from '../descriptors/data/400.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7699 as c5, d7700 as c6 } from '../descriptors/data/368.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8267 as c12, d8268 as c13, d8269 as c14, d8270 as c15 } from '../descriptors/data/401.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6899 as c16 } from '../descriptors/data/322.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8282 as c17, d8283 as c18, d8289 as c19 } from '../descriptors/data/402.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d334 as d334 } from '../descriptors/data/20.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d334;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequestAmount"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["RefundAdjustmentAudit"]:c3(),["RefundAdjustmentReasonRequest"]:c4(),["RefundCharge"]:c5(),["RefundDestinations"]:c6(),["RefundLineItem"]:c7(),["RefundLineItemAdjustmentIn"]:c8(),["RefundLineItemAdjustmentRefundIn"]:c9(),["RefundTaxBreakdownRefundIn"]:c10(),["RefundTenderAllocationRequest"]:c11(),["SharedCodec1416"]:c12(),["SharedCodec1417"]:c13(),["SharedCodec1418"]:c14(),["SharedCodec1419"]:c15(),["SharedCodec142"]:c16(),["SharedCodec387"]:c17(),["SharedCodec388"]:c18(),["SplitReversalRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequestAmount(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
