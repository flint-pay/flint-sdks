import { d194 as c0 } from '../descriptors/data/10.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c1 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4795 as c2, d4796 as c3, d4797 as c4, d4798 as c5, d4800 as c6, d4801 as c7, d4802 as c8, d4803 as c9, d4804 as c10 } from '../descriptors/data/215.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4805 as c11, d4806 as c12, d4807 as c13, d4808 as c14, d4813 as c16, d4814 as c17, d4815 as c18, d4816 as c19, d4817 as c20, d4818 as c21 } from '../descriptors/data/216.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3926 as c15 } from '../descriptors/data/166.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4819 as c22 } from '../descriptors/data/217.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d194 as d194 } from '../descriptors/data/10.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d194;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequest"]:c0(),["MoneyValue"]:c1(),["RefundAdjustmentAudit"]:c2(),["RefundAdjustmentReasonRequest"]:c3(),["RefundCharge"]:c4(),["RefundDestinations"]:c5(),["RefundLineItem"]:c6(),["RefundLineItemAdjustmentIn"]:c7(),["RefundLineItemAdjustmentRefundIn"]:c8(),["RefundTaxBreakdownRefundIn"]:c9(),["RefundTenderAllocationRequest"]:c10(),["SharedCodec1048"]:c11(),["SharedCodec1049"]:c12(),["SharedCodec1050"]:c13(),["SharedCodec1051"]:c14(),["SharedCodec134"]:c15(),["SharedCodec186"]:c16(),["SharedCodec187"]:c17(),["SharedCodec188"]:c18(),["SharedCodec189"]:c19(),["SharedCodec190"]:c20(),["SharedCodec191"]:c21(),["SharedCodec192"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
