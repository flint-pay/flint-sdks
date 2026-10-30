import { d280 as c0, d289 as c1 } from '../descriptors/data/16.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d296 as c2 } from '../descriptors/data/17.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c3 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5868 as c4, d5869 as c5, d5871 as c9, d5872 as c10, d5873 as c11, d5874 as c12 } from '../descriptors/data/269.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1254 as c6, d1255 as c7, d1258 as c8 } from '../descriptors/data/59.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6596 as c13, d6597 as c14, d6598 as c15, d6599 as c16, d6600 as c17, d6604 as c18, d6605 as c19, d6606 as c20 } from '../descriptors/data/312.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d2101 as c21, d2122 as c23 } from '../descriptors/data/90.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6612 as c22, d6613 as c24, d6614 as c25 } from '../descriptors/data/313.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5882 as c26, d5888 as c27 } from '../descriptors/data/270.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4602 as c28 } from '../descriptors/data/198.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d289 as d289 } from '../descriptors/data/16.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d289;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["CreateReturnPreviewRequestResolution"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["MoneyValue"]:c3(),["ReturnEligibilityLineItemRequest"]:c4(),["ReturnEligibilitySelection"]:c5(),["ReturnReplacementLineItemRequest"]:c6(),["ReturnResolutionAdjustmentRequest"]:c7(),["ReturnResolutionLineItemRequest"]:c8(),["SharedCodec1153"]:c9(),["SharedCodec1154"]:c10(),["SharedCodec1155"]:c11(),["SharedCodec1156"]:c12(),["SharedCodec1204"]:c13(),["SharedCodec1205"]:c14(),["SharedCodec1206"]:c15(),["SharedCodec1207"]:c16(),["SharedCodec1208"]:c17(),["SharedCodec1209"]:c18(),["SharedCodec1210"]:c19(),["SharedCodec1211"]:c20(),["SharedCodec305"]:c21(),["SharedCodec306"]:c22(),["SharedCodec307"]:c23(),["SharedCodec308"]:c24(),["SharedCodec309"]:c25(),["SharedCodec36"]:c26(),["SharedCodec37"]:c27(),["SharedCodec85"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequestResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
