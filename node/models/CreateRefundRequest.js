import { d332 as c0 } from '../descriptors/data/20.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5919 as c1 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c2 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8264 as c3, d8265 as c4, d8267 as c7, d8268 as c8, d8269 as c9, d8270 as c10, d8271 as c11 } from '../descriptors/data/403.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7700 as c5, d7701 as c6 } from '../descriptors/data/371.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8273 as c12, d8274 as c14, d8275 as c15, d8276 as c16 } from '../descriptors/data/404.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6900 as c13 } from '../descriptors/data/325.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8287 as c17, d8288 as c18, d8289 as c19, d8290 as c20, d8291 as c21, d8292 as c22, d8293 as c23, d8294 as c24, d8295 as c25 } from '../descriptors/data/405.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d332 as d332 } from '../descriptors/data/20.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d332;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["RefundAdjustmentAudit"]:c3(),["RefundAdjustmentReasonRequest"]:c4(),["RefundCharge"]:c5(),["RefundDestinations"]:c6(),["RefundLineItem"]:c7(),["RefundLineItemAdjustmentIn"]:c8(),["RefundLineItemAdjustmentRefundIn"]:c9(),["RefundTaxBreakdownRefundIn"]:c10(),["RefundTenderAllocationRequest"]:c11(),["SharedCodec1409"]:c12(),["SharedCodec141"]:c13(),["SharedCodec1410"]:c14(),["SharedCodec1411"]:c15(),["SharedCodec1412"]:c16(),["SharedCodec390"]:c17(),["SharedCodec391"]:c18(),["SharedCodec392"]:c19(),["SharedCodec393"]:c20(),["SharedCodec394"]:c21(),["SharedCodec395"]:c22(),["SharedCodec396"]:c23(),["SharedCodec397"]:c24(),["SplitReversalRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
