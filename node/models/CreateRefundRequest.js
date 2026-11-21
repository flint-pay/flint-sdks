import { d371 as c0 } from '../descriptors/data/21.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8056 as c1 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c2 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10497 as c3, d10498 as c4, d10500 as c7, d10501 as c8, d10502 as c9, d10503 as c10, d10504 as c11, d10506 as c13, d10507 as c14 } from '../descriptors/data/493.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9909 as c5, d9910 as c6 } from '../descriptors/data/459.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9042 as c12 } from '../descriptors/data/409.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10508 as c15, d10509 as c16 } from '../descriptors/data/494.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10520 as c17, d10521 as c18, d10522 as c19, d10523 as c20, d10524 as c21, d10525 as c22, d10526 as c23, d10527 as c24, d10528 as c25 } from '../descriptors/data/495.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d371 as d371 } from '../descriptors/data/21.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d371;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["RefundAdjustmentAudit"]:c3(),["RefundAdjustmentReasonRequest"]:c4(),["RefundCharge"]:c5(),["RefundDestinations"]:c6(),["RefundLineItem"]:c7(),["RefundLineItemAdjustmentIn"]:c8(),["RefundLineItemAdjustmentRefundIn"]:c9(),["RefundTaxBreakdownRefundIn"]:c10(),["RefundTenderAllocationRequest"]:c11(),["SharedCodec217"]:c12(),["SharedCodec2572"]:c13(),["SharedCodec2573"]:c14(),["SharedCodec2577"]:c15(),["SharedCodec2578"]:c16(),["SharedCodec544"]:c17(),["SharedCodec545"]:c18(),["SharedCodec546"]:c19(),["SharedCodec547"]:c20(),["SharedCodec548"]:c21(),["SharedCodec549"]:c22(),["SharedCodec550"]:c23(),["SharedCodec551"]:c24(),["SplitReversalRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
