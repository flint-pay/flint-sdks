import { d371 as c0 } from '../descriptors/data/22.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8046 as c1 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c2 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10481 as c3, d10482 as c4 } from '../descriptors/data/492.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9894 as c5, d9895 as c6 } from '../descriptors/data/459.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10484 as c7, d10485 as c8, d10486 as c9, d10487 as c10, d10488 as c11, d10490 as c13, d10491 as c14, d10492 as c15, d10493 as c16 } from '../descriptors/data/493.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9028 as c12 } from '../descriptors/data/408.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10504 as c17, d10505 as c18, d10506 as c19, d10507 as c20, d10508 as c21, d10509 as c22 } from '../descriptors/data/494.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10510 as c23, d10511 as c24, d10512 as c25 } from '../descriptors/data/495.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d371 as d371 } from '../descriptors/data/22.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d371;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["RefundAdjustmentAudit"]:c3(),["RefundAdjustmentReasonRequest"]:c4(),["RefundCharge"]:c5(),["RefundDestinations"]:c6(),["RefundLineItem"]:c7(),["RefundLineItemAdjustmentIn"]:c8(),["RefundLineItemAdjustmentRefundIn"]:c9(),["RefundTaxBreakdownRefundIn"]:c10(),["RefundTenderAllocationRequest"]:c11(),["SharedCodec216"]:c12(),["SharedCodec2567"]:c13(),["SharedCodec2568"]:c14(),["SharedCodec2572"]:c15(),["SharedCodec2573"]:c16(),["SharedCodec540"]:c17(),["SharedCodec541"]:c18(),["SharedCodec542"]:c19(),["SharedCodec543"]:c20(),["SharedCodec544"]:c21(),["SharedCodec545"]:c22(),["SharedCodec546"]:c23(),["SharedCodec547"]:c24(),["SplitReversalRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
