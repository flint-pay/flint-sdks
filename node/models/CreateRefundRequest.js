import { d369 as c0 } from '../descriptors/data/22.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8014 as c1 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c2 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10434 as c3, d10435 as c4 } from '../descriptors/data/486.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9852 as c5, d9853 as c6 } from '../descriptors/data/453.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10437 as c7, d10438 as c8, d10439 as c9, d10440 as c10, d10441 as c11, d10443 as c13, d10444 as c14, d10445 as c15, d10446 as c16 } from '../descriptors/data/487.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8995 as c12 } from '../descriptors/data/403.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10457 as c17, d10458 as c18, d10459 as c19, d10460 as c20, d10461 as c21, d10462 as c22 } from '../descriptors/data/488.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10463 as c23, d10464 as c24, d10465 as c25 } from '../descriptors/data/489.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d369 as d369 } from '../descriptors/data/22.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d369;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["RefundAdjustmentAudit"]:c3(),["RefundAdjustmentReasonRequest"]:c4(),["RefundCharge"]:c5(),["RefundDestinations"]:c6(),["RefundLineItem"]:c7(),["RefundLineItemAdjustmentIn"]:c8(),["RefundLineItemAdjustmentRefundIn"]:c9(),["RefundTaxBreakdownRefundIn"]:c10(),["RefundTenderAllocationRequest"]:c11(),["SharedCodec216"]:c12(),["SharedCodec2568"]:c13(),["SharedCodec2569"]:c14(),["SharedCodec2573"]:c15(),["SharedCodec2574"]:c16(),["SharedCodec539"]:c17(),["SharedCodec540"]:c18(),["SharedCodec541"]:c19(),["SharedCodec542"]:c20(),["SharedCodec543"]:c21(),["SharedCodec544"]:c22(),["SharedCodec545"]:c23(),["SharedCodec546"]:c24(),["SplitReversalRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
