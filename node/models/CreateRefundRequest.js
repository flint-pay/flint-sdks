import { d371 as c0 } from '../descriptors/data/22.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8048 as c1 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c2 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10484 as c3, d10485 as c4 } from '../descriptors/data/493.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9897 as c5, d9898 as c6 } from '../descriptors/data/460.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10487 as c7, d10488 as c8, d10489 as c9, d10490 as c10, d10491 as c11, d10493 as c13, d10494 as c14, d10495 as c15, d10496 as c16 } from '../descriptors/data/494.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9030 as c12 } from '../descriptors/data/409.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10507 as c17, d10508 as c18, d10509 as c19, d10510 as c20, d10511 as c21, d10512 as c22 } from '../descriptors/data/495.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10513 as c23, d10514 as c24, d10515 as c25 } from '../descriptors/data/496.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d371 as d371 } from '../descriptors/data/22.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d371;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["RefundAdjustmentAudit"]:c3(),["RefundAdjustmentReasonRequest"]:c4(),["RefundCharge"]:c5(),["RefundDestinations"]:c6(),["RefundLineItem"]:c7(),["RefundLineItemAdjustmentIn"]:c8(),["RefundLineItemAdjustmentRefundIn"]:c9(),["RefundTaxBreakdownRefundIn"]:c10(),["RefundTenderAllocationRequest"]:c11(),["SharedCodec216"]:c12(),["SharedCodec2567"]:c13(),["SharedCodec2568"]:c14(),["SharedCodec2572"]:c15(),["SharedCodec2573"]:c16(),["SharedCodec540"]:c17(),["SharedCodec541"]:c18(),["SharedCodec542"]:c19(),["SharedCodec543"]:c20(),["SharedCodec544"]:c21(),["SharedCodec545"]:c22(),["SharedCodec546"]:c23(),["SharedCodec547"]:c24(),["SplitReversalRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
