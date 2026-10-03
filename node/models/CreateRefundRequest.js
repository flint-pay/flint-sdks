import { d462 as c0, d74 as c1, d2069 as c2, d2070 as c3, d2071 as c4, d2074 as c5, d2076 as c6, d2078 as c7, d2086 as c8, d2091 as c9, d421 as c10, d2089 as c11, d2088 as c12, d2090 as c13 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d462 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d462;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequest"]:c0(),["MoneyValue"]:c1(),["RefundAdjustmentAudit"]:c2(),["RefundAdjustmentReason"]:c3(),["RefundCharge"]:c4(),["RefundLineItem"]:c5(),["RefundLineItemAdjustmentIn"]:c6(),["RefundLineItemAdjustmentRefundIn"]:c7(),["RefundTaxBreakdownRefundIn"]:c8(),["RefundTenderAllocationRequest"]:c9(),["SharedCodec157"]:c10(),["SharedCodec527"]:c11(),["SharedCodec528"]:c12(),["SharedCodec529"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
