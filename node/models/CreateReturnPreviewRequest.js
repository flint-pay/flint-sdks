import { d285 as c0 } from '../descriptors/data/16.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d292 as c1, d301 as c2 } from '../descriptors/data/17.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c3 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5899 as c4, d5900 as c5, d5902 as c9, d5903 as c10, d5904 as c11, d5905 as c12 } from '../descriptors/data/270.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1267 as c6, d1268 as c7, d1271 as c8 } from '../descriptors/data/60.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6655 as c13 } from '../descriptors/data/314.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6656 as c14, d6657 as c15, d6658 as c16, d6659 as c17, d6663 as c18, d6664 as c19, d6665 as c20 } from '../descriptors/data/315.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d2086 as c21, d2097 as c22 } from '../descriptors/data/90.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d2108 as c23, d2129 as c25 } from '../descriptors/data/91.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6671 as c24, d6672 as c26, d6673 as c27 } from '../descriptors/data/316.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5912 as c28, d5913 as c29, d5919 as c30 } from '../descriptors/data/271.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4633 as c31 } from '../descriptors/data/199.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d292 as d292 } from '../descriptors/data/17.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d292;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["CreateReturnPreviewRequest"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["MoneyValue"]:c3(),["ReturnEligibilityLineItemRequest"]:c4(),["ReturnEligibilitySelection"]:c5(),["ReturnReplacementLineItemRequest"]:c6(),["ReturnResolutionAdjustmentRequest"]:c7(),["ReturnResolutionLineItemRequest"]:c8(),["SharedCodec1171"]:c9(),["SharedCodec1172"]:c10(),["SharedCodec1173"]:c11(),["SharedCodec1174"]:c12(),["SharedCodec1222"]:c13(),["SharedCodec1223"]:c14(),["SharedCodec1224"]:c15(),["SharedCodec1225"]:c16(),["SharedCodec1226"]:c17(),["SharedCodec1227"]:c18(),["SharedCodec1228"]:c19(),["SharedCodec1229"]:c20(),["SharedCodec305"]:c21(),["SharedCodec306"]:c22(),["SharedCodec307"]:c23(),["SharedCodec308"]:c24(),["SharedCodec309"]:c25(),["SharedCodec310"]:c26(),["SharedCodec311"]:c27(),["SharedCodec34"]:c28(),["SharedCodec36"]:c29(),["SharedCodec37"]:c30(),["SharedCodec85"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
