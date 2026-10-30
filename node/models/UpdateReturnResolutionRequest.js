import { d4281 as c0 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6596 as c1, d6597 as c2, d6598 as c3, d6599 as c4, d6600 as c5 } from '../descriptors/data/312.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4399 as c6 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4511 as c7 } from '../descriptors/data/193.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4777 as c8 } from '../descriptors/data/209.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6634 as c9, d6635 as c10, d6636 as c11, d6637 as c12, d6638 as c13 } from '../descriptors/data/314.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4602 as c14 } from '../descriptors/data/198.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4204 as c15, d4206 as c16 } from '../descriptors/data/175.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4207 as c17, d4208 as c18 } from '../descriptors/data/176.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4208 as d4208 } from '../descriptors/data/176.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4208;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SharedCodec1204"]:c1(),["SharedCodec1205"]:c2(),["SharedCodec1206"]:c3(),["SharedCodec1207"]:c4(),["SharedCodec1208"]:c5(),["SharedCodec1350"]:c6(),["SharedCodec1353"]:c7(),["SharedCodec1354"]:c8(),["SharedCodec1425"]:c9(),["SharedCodec1426"]:c10(),["SharedCodec1427"]:c11(),["SharedCodec1428"]:c12(),["SharedCodec1429"]:c13(),["SharedCodec85"]:c14(),["UpdateReturnReplacementLineItemRequest"]:c15(),["UpdateReturnResolutionAdjustmentRequest"]:c16(),["UpdateReturnResolutionLineItemRequest"]:c17(),["UpdateReturnResolutionRequest"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
