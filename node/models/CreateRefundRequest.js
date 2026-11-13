import { d329 as c0 } from '../descriptors/data/20.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5893 as c1 } from '../descriptors/data/264.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c2 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8220 as c3, d8221 as c4, d8223 as c7, d8224 as c8, d8225 as c9, d8226 as c10, d8227 as c11, d8229 as c13, d8230 as c14, d8231 as c15 } from '../descriptors/data/397.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7661 as c5, d7662 as c6 } from '../descriptors/data/365.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6862 as c12 } from '../descriptors/data/319.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8232 as c16 } from '../descriptors/data/398.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8243 as c17, d8244 as c18, d8245 as c19, d8246 as c20, d8247 as c21, d8248 as c22, d8249 as c23, d8250 as c24, d8251 as c25 } from '../descriptors/data/399.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d329 as d329 } from '../descriptors/data/20.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d329;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["RefundAdjustmentAudit"]:c3(),["RefundAdjustmentReasonRequest"]:c4(),["RefundCharge"]:c5(),["RefundDestinations"]:c6(),["RefundLineItem"]:c7(),["RefundLineItemAdjustmentIn"]:c8(),["RefundLineItemAdjustmentRefundIn"]:c9(),["RefundTaxBreakdownRefundIn"]:c10(),["RefundTenderAllocationRequest"]:c11(),["SharedCodec141"]:c12(),["SharedCodec1414"]:c13(),["SharedCodec1415"]:c14(),["SharedCodec1416"]:c15(),["SharedCodec1417"]:c16(),["SharedCodec384"]:c17(),["SharedCodec385"]:c18(),["SharedCodec386"]:c19(),["SharedCodec387"]:c20(),["SharedCodec388"]:c21(),["SharedCodec389"]:c22(),["SharedCodec390"]:c23(),["SharedCodec391"]:c24(),["SplitReversalRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
