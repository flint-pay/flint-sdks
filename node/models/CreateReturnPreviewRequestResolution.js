import { d285 as c0 } from '../descriptors/data/16.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d294 as c1, d301 as c2 } from '../descriptors/data/17.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c3 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5899 as c4, d5900 as c5, d5902 as c9, d5903 as c10, d5904 as c11, d5905 as c12 } from '../descriptors/data/270.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1267 as c6, d1268 as c7, d1271 as c8 } from '../descriptors/data/60.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6655 as c13 } from '../descriptors/data/314.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6656 as c14, d6657 as c15, d6658 as c16, d6659 as c17, d6663 as c18, d6664 as c19, d6665 as c20 } from '../descriptors/data/315.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d2108 as c21, d2129 as c23 } from '../descriptors/data/91.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6671 as c22, d6672 as c24, d6673 as c25 } from '../descriptors/data/316.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5913 as c26, d5919 as c27 } from '../descriptors/data/271.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4633 as c28 } from '../descriptors/data/199.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d294 as d294 } from '../descriptors/data/17.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d294;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["CreateReturnPreviewRequestResolution"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["MoneyValue"]:c3(),["ReturnEligibilityLineItemRequest"]:c4(),["ReturnEligibilitySelection"]:c5(),["ReturnReplacementLineItemRequest"]:c6(),["ReturnResolutionAdjustmentRequest"]:c7(),["ReturnResolutionLineItemRequest"]:c8(),["SharedCodec1171"]:c9(),["SharedCodec1172"]:c10(),["SharedCodec1173"]:c11(),["SharedCodec1174"]:c12(),["SharedCodec1222"]:c13(),["SharedCodec1223"]:c14(),["SharedCodec1224"]:c15(),["SharedCodec1225"]:c16(),["SharedCodec1226"]:c17(),["SharedCodec1227"]:c18(),["SharedCodec1228"]:c19(),["SharedCodec1229"]:c20(),["SharedCodec307"]:c21(),["SharedCodec308"]:c22(),["SharedCodec309"]:c23(),["SharedCodec310"]:c24(),["SharedCodec311"]:c25(),["SharedCodec36"]:c26(),["SharedCodec37"]:c27(),["SharedCodec85"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequestResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
