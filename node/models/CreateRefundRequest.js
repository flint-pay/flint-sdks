import { d362 as c0 } from '../descriptors/data/21.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7767 as c1 } from '../descriptors/data/336.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7640 as c2 } from '../descriptors/data/327.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d10114 as c3, d10115 as c4, d10117 as c7, d10118 as c8, d10119 as c9, d10120 as c10, d10121 as c11 } from '../descriptors/data/471.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9554 as c5, d9555 as c6 } from '../descriptors/data/439.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8754 as c12 } from '../descriptors/data/393.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d10123 as c13, d10124 as c14, d10125 as c15, d10126 as c16 } from '../descriptors/data/472.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d10137 as c17, d10138 as c18, d10139 as c19, d10140 as c20, d10141 as c21, d10142 as c22, d10143 as c23, d10144 as c24, d10145 as c25 } from '../descriptors/data/473.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d362 as d362 } from '../descriptors/data/21.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d362;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["RefundAdjustmentAudit"]:c3(),["RefundAdjustmentReasonRequest"]:c4(),["RefundCharge"]:c5(),["RefundDestinations"]:c6(),["RefundLineItem"]:c7(),["RefundLineItemAdjustmentIn"]:c8(),["RefundLineItemAdjustmentRefundIn"]:c9(),["RefundTaxBreakdownRefundIn"]:c10(),["RefundTenderAllocationRequest"]:c11(),["SharedCodec211"]:c12(),["SharedCodec2487"]:c13(),["SharedCodec2488"]:c14(),["SharedCodec2492"]:c15(),["SharedCodec2493"]:c16(),["SharedCodec531"]:c17(),["SharedCodec532"]:c18(),["SharedCodec533"]:c19(),["SharedCodec534"]:c20(),["SharedCodec535"]:c21(),["SharedCodec536"]:c22(),["SharedCodec537"]:c23(),["SharedCodec538"]:c24(),["SplitReversalRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
