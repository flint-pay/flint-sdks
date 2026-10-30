import { d272 as c0 } from '../descriptors/data/15.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4398 as c1 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c2 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6464 as c3, d6465 as c4, d6466 as c6, d6468 as c8, d6469 as c9, d6470 as c12, d6471 as c13, d6472 as c14, d6473 as c15 } from '../descriptors/data/304.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1158 as c5, d1163 as c7 } from '../descriptors/data/54.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1170 as c10, d1173 as c11 } from '../descriptors/data/55.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5350 as c16 } from '../descriptors/data/240.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6491 as c17, d6492 as c18, d6493 as c19, d6494 as c20, d6495 as c23 } from '../descriptors/data/305.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d2006 as c21, d2017 as c22 } from '../descriptors/data/87.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d272 as d272 } from '../descriptors/data/15.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d272;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["RefundAdjustmentAudit"]:c3(),["RefundAdjustmentReasonRequest"]:c4(),["RefundCharge"]:c5(),["RefundDestinations"]:c6(),["RefundLineItem"]:c7(),["RefundLineItemAdjustmentIn"]:c8(),["RefundLineItemAdjustmentRefundIn"]:c9(),["RefundTaxBreakdownRefundIn"]:c10(),["RefundTenderAllocationRequest"]:c11(),["SharedCodec1118"]:c12(),["SharedCodec1119"]:c13(),["SharedCodec1120"]:c14(),["SharedCodec1121"]:c15(),["SharedCodec219"]:c16(),["SharedCodec292"]:c17(),["SharedCodec293"]:c18(),["SharedCodec294"]:c19(),["SharedCodec295"]:c20(),["SharedCodec296"]:c21(),["SharedCodec297"]:c22(),["SharedCodec298"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
