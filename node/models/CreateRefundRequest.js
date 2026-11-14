import { d328 as c0 } from '../descriptors/data/20.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5911 as c1 } from '../descriptors/data/267.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c2 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8254 as c3, d8255 as c4, d8257 as c7, d8258 as c8, d8259 as c9, d8260 as c10, d8261 as c11 } from '../descriptors/data/401.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7697 as c5, d7698 as c6 } from '../descriptors/data/369.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6898 as c12 } from '../descriptors/data/324.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8263 as c13, d8264 as c14, d8265 as c15, d8266 as c16 } from '../descriptors/data/402.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8277 as c17, d8278 as c18, d8279 as c19, d8280 as c20, d8281 as c21, d8282 as c22, d8283 as c23, d8284 as c24, d8285 as c25 } from '../descriptors/data/403.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d328 as d328 } from '../descriptors/data/20.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d328;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["RefundAdjustmentAudit"]:c3(),["RefundAdjustmentReasonRequest"]:c4(),["RefundCharge"]:c5(),["RefundDestinations"]:c6(),["RefundLineItem"]:c7(),["RefundLineItemAdjustmentIn"]:c8(),["RefundLineItemAdjustmentRefundIn"]:c9(),["RefundTaxBreakdownRefundIn"]:c10(),["RefundTenderAllocationRequest"]:c11(),["SharedCodec136"]:c12(),["SharedCodec1399"]:c13(),["SharedCodec1400"]:c14(),["SharedCodec1401"]:c15(),["SharedCodec1402"]:c16(),["SharedCodec384"]:c17(),["SharedCodec385"]:c18(),["SharedCodec386"]:c19(),["SharedCodec387"]:c20(),["SharedCodec388"]:c21(),["SharedCodec389"]:c22(),["SharedCodec390"]:c23(),["SharedCodec391"]:c24(),["SplitReversalRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
