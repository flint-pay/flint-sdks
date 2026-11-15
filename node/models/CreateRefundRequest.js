import { d329 as c0 } from '../descriptors/data/20.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5913 as c1 } from '../descriptors/data/267.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5786 as c2 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8257 as c3, d8258 as c4, d8260 as c7, d8261 as c8, d8262 as c9, d8263 as c10, d8264 as c11 } from '../descriptors/data/401.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7700 as c5, d7701 as c6 } from '../descriptors/data/369.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6900 as c12 } from '../descriptors/data/324.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8266 as c13, d8267 as c14, d8268 as c15, d8269 as c16 } from '../descriptors/data/402.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8280 as c17, d8281 as c18, d8282 as c19, d8283 as c20, d8284 as c21, d8285 as c22, d8286 as c23, d8287 as c24, d8288 as c25 } from '../descriptors/data/403.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d329 as d329 } from '../descriptors/data/20.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d329;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["RefundAdjustmentAudit"]:c3(),["RefundAdjustmentReasonRequest"]:c4(),["RefundCharge"]:c5(),["RefundDestinations"]:c6(),["RefundLineItem"]:c7(),["RefundLineItemAdjustmentIn"]:c8(),["RefundLineItemAdjustmentRefundIn"]:c9(),["RefundTaxBreakdownRefundIn"]:c10(),["RefundTenderAllocationRequest"]:c11(),["SharedCodec136"]:c12(),["SharedCodec1399"]:c13(),["SharedCodec1400"]:c14(),["SharedCodec1401"]:c15(),["SharedCodec1402"]:c16(),["SharedCodec384"]:c17(),["SharedCodec385"]:c18(),["SharedCodec386"]:c19(),["SharedCodec387"]:c20(),["SharedCodec388"]:c21(),["SharedCodec389"]:c22(),["SharedCodec390"]:c23(),["SharedCodec391"]:c24(),["SplitReversalRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
