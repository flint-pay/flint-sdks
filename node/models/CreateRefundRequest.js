import { d331 as c0 } from '../descriptors/data/20.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c1 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c2 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8288 as c3, d8289 as c4, d8291 as c7, d8292 as c8, d8293 as c9, d8294 as c10, d8295 as c11 } from '../descriptors/data/403.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7728 as c5, d7729 as c6 } from '../descriptors/data/370.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6928 as c12 } from '../descriptors/data/325.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8297 as c13, d8298 as c14, d8299 as c15, d8300 as c16 } from '../descriptors/data/404.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8311 as c17, d8312 as c18, d8313 as c19, d8314 as c20, d8315 as c21, d8316 as c22, d8317 as c23, d8318 as c24, d8319 as c25 } from '../descriptors/data/405.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d331 as d331 } from '../descriptors/data/20.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d331;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["RefundAdjustmentAudit"]:c3(),["RefundAdjustmentReasonRequest"]:c4(),["RefundCharge"]:c5(),["RefundDestinations"]:c6(),["RefundLineItem"]:c7(),["RefundLineItemAdjustmentIn"]:c8(),["RefundLineItemAdjustmentRefundIn"]:c9(),["RefundTaxBreakdownRefundIn"]:c10(),["RefundTenderAllocationRequest"]:c11(),["SharedCodec136"]:c12(),["SharedCodec1406"]:c13(),["SharedCodec1407"]:c14(),["SharedCodec1408"]:c15(),["SharedCodec1409"]:c16(),["SharedCodec384"]:c17(),["SharedCodec385"]:c18(),["SharedCodec386"]:c19(),["SharedCodec387"]:c20(),["SharedCodec388"]:c21(),["SharedCodec389"]:c22(),["SharedCodec390"]:c23(),["SharedCodec391"]:c24(),["SplitReversalRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
