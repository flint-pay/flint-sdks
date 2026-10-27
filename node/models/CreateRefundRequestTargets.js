import { d197 as c0 } from '../descriptors/data/11.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c1 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4795 as c2, d4796 as c3, d4797 as c4, d4798 as c5, d4800 as c6, d4801 as c7, d4802 as c8, d4803 as c9 } from '../descriptors/data/215.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4814 as c10, d4815 as c11 } from '../descriptors/data/216.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4819 as c12 } from '../descriptors/data/217.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d197 as d197 } from '../descriptors/data/11.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d197;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequestTargets"]:c0(),["MoneyValue"]:c1(),["RefundAdjustmentAudit"]:c2(),["RefundAdjustmentReasonRequest"]:c3(),["RefundCharge"]:c4(),["RefundDestinations"]:c5(),["RefundLineItem"]:c6(),["RefundLineItemAdjustmentIn"]:c7(),["RefundLineItemAdjustmentRefundIn"]:c8(),["RefundTaxBreakdownRefundIn"]:c9(),["SharedCodec187"]:c10(),["SharedCodec188"]:c11(),["SharedCodec192"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequestTargets(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
