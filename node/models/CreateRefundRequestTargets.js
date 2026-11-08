import { d280 as c0 } from '../descriptors/data/16.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4429 as c1 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c2 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6523 as c3, d6524 as c4, d6525 as c6, d6527 as c8, d6528 as c9 } from '../descriptors/data/306.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1171 as c5, d1176 as c7 } from '../descriptors/data/55.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1183 as c10 } from '../descriptors/data/56.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6551 as c11, d6552 as c12, d6554 as c13 } from '../descriptors/data/308.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d280 as d280 } from '../descriptors/data/16.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d280;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequestTargets"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["RefundAdjustmentAudit"]:c3(),["RefundAdjustmentReasonRequest"]:c4(),["RefundCharge"]:c5(),["RefundDestinations"]:c6(),["RefundLineItem"]:c7(),["RefundLineItemAdjustmentIn"]:c8(),["RefundLineItemAdjustmentRefundIn"]:c9(),["RefundTaxBreakdownRefundIn"]:c10(),["SharedCodec295"]:c11(),["SharedCodec296"]:c12(),["SharedCodec300"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequestTargets(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
