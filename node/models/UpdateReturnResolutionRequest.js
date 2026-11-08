import { d4312 as c0 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6655 as c1 } from '../descriptors/data/314.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6656 as c2, d6657 as c3, d6658 as c4, d6659 as c5 } from '../descriptors/data/315.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4430 as c6 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4542 as c7 } from '../descriptors/data/194.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4808 as c8 } from '../descriptors/data/210.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6693 as c9, d6694 as c10, d6695 as c11, d6696 as c12, d6697 as c13 } from '../descriptors/data/317.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4633 as c14 } from '../descriptors/data/199.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4235 as c15 } from '../descriptors/data/176.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4237 as c16, d4238 as c17, d4239 as c18 } from '../descriptors/data/177.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4239 as d4239 } from '../descriptors/data/177.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4239;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SharedCodec1222"]:c1(),["SharedCodec1223"]:c2(),["SharedCodec1224"]:c3(),["SharedCodec1225"]:c4(),["SharedCodec1226"]:c5(),["SharedCodec1368"]:c6(),["SharedCodec1371"]:c7(),["SharedCodec1372"]:c8(),["SharedCodec1443"]:c9(),["SharedCodec1444"]:c10(),["SharedCodec1445"]:c11(),["SharedCodec1446"]:c12(),["SharedCodec1447"]:c13(),["SharedCodec85"]:c14(),["UpdateReturnReplacementLineItemRequest"]:c15(),["UpdateReturnResolutionAdjustmentRequest"]:c16(),["UpdateReturnResolutionLineItemRequest"]:c17(),["UpdateReturnResolutionRequest"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
