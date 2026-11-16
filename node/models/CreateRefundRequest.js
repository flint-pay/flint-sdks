import { d362 as c0 } from '../descriptors/data/21.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7857 as c1 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c2 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10204 as c3, d10205 as c4, d10207 as c7, d10208 as c8, d10209 as c9, d10210 as c10, d10211 as c11 } from '../descriptors/data/474.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9644 as c5, d9645 as c6 } from '../descriptors/data/442.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8844 as c12 } from '../descriptors/data/396.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10213 as c13, d10214 as c14, d10215 as c15, d10216 as c16 } from '../descriptors/data/475.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10227 as c17, d10228 as c18, d10229 as c19, d10230 as c20, d10231 as c21, d10232 as c22, d10233 as c23, d10234 as c24, d10235 as c25 } from '../descriptors/data/476.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d362 as d362 } from '../descriptors/data/21.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d362;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["RefundAdjustmentAudit"]:c3(),["RefundAdjustmentReasonRequest"]:c4(),["RefundCharge"]:c5(),["RefundDestinations"]:c6(),["RefundLineItem"]:c7(),["RefundLineItemAdjustmentIn"]:c8(),["RefundLineItemAdjustmentRefundIn"]:c9(),["RefundTaxBreakdownRefundIn"]:c10(),["RefundTenderAllocationRequest"]:c11(),["SharedCodec221"]:c12(),["SharedCodec2558"]:c13(),["SharedCodec2559"]:c14(),["SharedCodec2563"]:c15(),["SharedCodec2564"]:c16(),["SharedCodec551"]:c17(),["SharedCodec552"]:c18(),["SharedCodec553"]:c19(),["SharedCodec554"]:c20(),["SharedCodec555"]:c21(),["SharedCodec556"]:c22(),["SharedCodec557"]:c23(),["SharedCodec558"]:c24(),["SplitReversalRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
