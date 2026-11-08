import { d278 as c0 } from '../descriptors/data/16.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4429 as c1 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c2 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6523 as c3, d6524 as c4, d6525 as c6, d6527 as c8, d6528 as c9, d6529 as c12, d6530 as c13, d6531 as c14, d6532 as c15 } from '../descriptors/data/306.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1171 as c5, d1176 as c7 } from '../descriptors/data/55.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1183 as c10, d1186 as c11 } from '../descriptors/data/56.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5381 as c16 } from '../descriptors/data/241.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6551 as c17, d6552 as c18 } from '../descriptors/data/308.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d278 as d278 } from '../descriptors/data/16.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d278;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequestAmount"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["RefundAdjustmentAudit"]:c3(),["RefundAdjustmentReasonRequest"]:c4(),["RefundCharge"]:c5(),["RefundDestinations"]:c6(),["RefundLineItem"]:c7(),["RefundLineItemAdjustmentIn"]:c8(),["RefundLineItemAdjustmentRefundIn"]:c9(),["RefundTaxBreakdownRefundIn"]:c10(),["RefundTenderAllocationRequest"]:c11(),["SharedCodec1136"]:c12(),["SharedCodec1137"]:c13(),["SharedCodec1138"]:c14(),["SharedCodec1139"]:c15(),["SharedCodec221"]:c16(),["SharedCodec295"]:c17(),["SharedCodec296"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequestAmount(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
