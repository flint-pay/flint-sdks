import { d335 as c0 } from '../descriptors/data/20.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c1 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c2 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8288 as c3, d8289 as c4, d8291 as c7, d8292 as c8, d8293 as c9, d8294 as c10 } from '../descriptors/data/403.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7728 as c5, d7729 as c6 } from '../descriptors/data/370.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6928 as c11 } from '../descriptors/data/325.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8312 as c12, d8313 as c13, d8318 as c14, d8319 as c15 } from '../descriptors/data/405.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d335 as d335 } from '../descriptors/data/20.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d335;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequestTargets"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["RefundAdjustmentAudit"]:c3(),["RefundAdjustmentReasonRequest"]:c4(),["RefundCharge"]:c5(),["RefundDestinations"]:c6(),["RefundLineItem"]:c7(),["RefundLineItemAdjustmentIn"]:c8(),["RefundLineItemAdjustmentRefundIn"]:c9(),["RefundTaxBreakdownRefundIn"]:c10(),["SharedCodec136"]:c11(),["SharedCodec385"]:c12(),["SharedCodec386"]:c13(),["SharedCodec391"]:c14(),["SplitReversalRequest"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequestTargets(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
