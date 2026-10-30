import { d280 as c0, d287 as c1 } from '../descriptors/data/16.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d296 as c2 } from '../descriptors/data/17.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c3 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5868 as c4, d5869 as c5, d5871 as c9, d5872 as c10, d5873 as c11, d5874 as c12 } from '../descriptors/data/269.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1254 as c6, d1255 as c7, d1258 as c8 } from '../descriptors/data/59.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6596 as c13, d6597 as c14, d6598 as c15, d6599 as c16, d6600 as c17, d6604 as c18, d6605 as c19, d6606 as c20 } from '../descriptors/data/312.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d2079 as c21, d2090 as c22 } from '../descriptors/data/89.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d2101 as c23, d2122 as c25 } from '../descriptors/data/90.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6612 as c24, d6613 as c26, d6614 as c27 } from '../descriptors/data/313.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5881 as c28, d5882 as c29, d5888 as c30 } from '../descriptors/data/270.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4602 as c31 } from '../descriptors/data/198.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d287 as d287 } from '../descriptors/data/16.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d287;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["CreateReturnPreviewRequest"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["MoneyValue"]:c3(),["ReturnEligibilityLineItemRequest"]:c4(),["ReturnEligibilitySelection"]:c5(),["ReturnReplacementLineItemRequest"]:c6(),["ReturnResolutionAdjustmentRequest"]:c7(),["ReturnResolutionLineItemRequest"]:c8(),["SharedCodec1153"]:c9(),["SharedCodec1154"]:c10(),["SharedCodec1155"]:c11(),["SharedCodec1156"]:c12(),["SharedCodec1204"]:c13(),["SharedCodec1205"]:c14(),["SharedCodec1206"]:c15(),["SharedCodec1207"]:c16(),["SharedCodec1208"]:c17(),["SharedCodec1209"]:c18(),["SharedCodec1210"]:c19(),["SharedCodec1211"]:c20(),["SharedCodec303"]:c21(),["SharedCodec304"]:c22(),["SharedCodec305"]:c23(),["SharedCodec306"]:c24(),["SharedCodec307"]:c25(),["SharedCodec308"]:c26(),["SharedCodec309"]:c27(),["SharedCodec34"]:c28(),["SharedCodec36"]:c29(),["SharedCodec37"]:c30(),["SharedCodec85"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
