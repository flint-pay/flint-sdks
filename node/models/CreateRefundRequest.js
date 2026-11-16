import { d331 as c0 } from '../descriptors/data/20.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6744 as c1 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c2 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9091 as c3, d9092 as c4, d9094 as c7, d9095 as c8, d9096 as c9, d9097 as c10, d9098 as c11 } from '../descriptors/data/438.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8531 as c5, d8532 as c6 } from '../descriptors/data/406.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7731 as c12 } from '../descriptors/data/360.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9100 as c13, d9101 as c14, d9102 as c15, d9103 as c16 } from '../descriptors/data/439.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9114 as c17, d9115 as c18, d9116 as c19, d9117 as c20, d9118 as c21, d9119 as c22, d9120 as c23, d9121 as c24, d9122 as c25 } from '../descriptors/data/440.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d331 as d331 } from '../descriptors/data/20.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d331;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["RefundAdjustmentAudit"]:c3(),["RefundAdjustmentReasonRequest"]:c4(),["RefundCharge"]:c5(),["RefundDestinations"]:c6(),["RefundLineItem"]:c7(),["RefundLineItemAdjustmentIn"]:c8(),["RefundLineItemAdjustmentRefundIn"]:c9(),["RefundTaxBreakdownRefundIn"]:c10(),["RefundTenderAllocationRequest"]:c11(),["SharedCodec175"]:c12(),["SharedCodec1985"]:c13(),["SharedCodec1986"]:c14(),["SharedCodec1987"]:c15(),["SharedCodec1988"]:c16(),["SharedCodec474"]:c17(),["SharedCodec475"]:c18(),["SharedCodec476"]:c19(),["SharedCodec477"]:c20(),["SharedCodec478"]:c21(),["SharedCodec479"]:c22(),["SharedCodec480"]:c23(),["SharedCodec481"]:c24(),["SplitReversalRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
