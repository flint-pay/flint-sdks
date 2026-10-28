import { d231 as c0 } from '../descriptors/data/14.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3250 as c1 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c2 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5103 as c3 } from '../descriptors/data/236.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5104 as c4, d5105 as c5, d5106 as c6, d5108 as c7, d5109 as c8, d5110 as c9, d5111 as c10, d5112 as c11, d5113 as c12, d5114 as c13, d5115 as c14, d5116 as c15, d5121 as c17 } from '../descriptors/data/237.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4188 as c16 } from '../descriptors/data/183.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5122 as c18, d5123 as c19, d5124 as c20, d5125 as c21, d5126 as c22, d5127 as c23 } from '../descriptors/data/238.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d231 as d231 } from '../descriptors/data/14.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d231;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["RefundAdjustmentAudit"]:c3(),["RefundAdjustmentReasonRequest"]:c4(),["RefundCharge"]:c5(),["RefundDestinations"]:c6(),["RefundLineItem"]:c7(),["RefundLineItemAdjustmentIn"]:c8(),["RefundLineItemAdjustmentRefundIn"]:c9(),["RefundTaxBreakdownRefundIn"]:c10(),["RefundTenderAllocationRequest"]:c11(),["SharedCodec1124"]:c12(),["SharedCodec1125"]:c13(),["SharedCodec1126"]:c14(),["SharedCodec1127"]:c15(),["SharedCodec158"]:c16(),["SharedCodec228"]:c17(),["SharedCodec229"]:c18(),["SharedCodec230"]:c19(),["SharedCodec231"]:c20(),["SharedCodec232"]:c21(),["SharedCodec233"]:c22(),["SharedCodec234"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
