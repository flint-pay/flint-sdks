import { d301 as c0 } from '../descriptors/data/17.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c1 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1267 as c2, d1268 as c3, d1271 as c4 } from '../descriptors/data/60.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6655 as c5 } from '../descriptors/data/314.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6656 as c6, d6657 as c7, d6658 as c8, d6659 as c9, d6663 as c10, d6664 as c11, d6665 as c12 } from '../descriptors/data/315.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d2108 as c13, d2129 as c15 } from '../descriptors/data/91.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6671 as c14, d6672 as c16, d6673 as c17 } from '../descriptors/data/316.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5919 as c18 } from '../descriptors/data/271.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4633 as c19 } from '../descriptors/data/199.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d301 as d301 } from '../descriptors/data/17.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d301;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionPreviewRequest"]:c0(),["MoneyValue"]:c1(),["ReturnReplacementLineItemRequest"]:c2(),["ReturnResolutionAdjustmentRequest"]:c3(),["ReturnResolutionLineItemRequest"]:c4(),["SharedCodec1222"]:c5(),["SharedCodec1223"]:c6(),["SharedCodec1224"]:c7(),["SharedCodec1225"]:c8(),["SharedCodec1226"]:c9(),["SharedCodec1227"]:c10(),["SharedCodec1228"]:c11(),["SharedCodec1229"]:c12(),["SharedCodec307"]:c13(),["SharedCodec308"]:c14(),["SharedCodec309"]:c15(),["SharedCodec310"]:c16(),["SharedCodec311"]:c17(),["SharedCodec37"]:c18(),["SharedCodec85"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
