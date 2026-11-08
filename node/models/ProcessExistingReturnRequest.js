import { d4429 as c0 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c1 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1117 as c2, d1118 as c3 } from '../descriptors/data/53.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1249 as c4, d1250 as c7, d1251 as c8 } from '../descriptors/data/59.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6731 as c5 } from '../descriptors/data/319.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6732 as c6, d6735 as c10, d6738 as c14, d6739 as c15 } from '../descriptors/data/320.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1267 as c9 } from '../descriptors/data/60.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6600 as c11, d6601 as c12, d6602 as c13 } from '../descriptors/data/311.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6655 as c16 } from '../descriptors/data/314.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6656 as c17, d6657 as c18, d6658 as c19, d6659 as c20, d6663 as c21, d6664 as c22, d6665 as c23 } from '../descriptors/data/315.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5450 as c24 } from '../descriptors/data/244.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6801 as c25 } from '../descriptors/data/323.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4633 as c26 } from '../descriptors/data/199.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1118 as d1118 } from '../descriptors/data/53.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1118;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["ProcessExistingReturnLineItemRequest"]:c2(),["ProcessExistingReturnRequest"]:c3(),["ReturnProcessDecision"]:c4(),["ReturnProcessDispositionRequest"]:c5(),["ReturnProcessInspectionRequest"]:c6(),["ReturnProcessReceiptRequest"]:c7(),["ReturnProcessResolutionRequest"]:c8(),["ReturnReplacementLineItemRequest"]:c9(),["ReturnSourceSystemRequest"]:c10(),["SharedCodec1177"]:c11(),["SharedCodec1178"]:c12(),["SharedCodec1179"]:c13(),["SharedCodec1186"]:c14(),["SharedCodec1187"]:c15(),["SharedCodec1222"]:c16(),["SharedCodec1223"]:c17(),["SharedCodec1224"]:c18(),["SharedCodec1225"]:c19(),["SharedCodec1226"]:c20(),["SharedCodec1227"]:c21(),["SharedCodec1228"]:c22(),["SharedCodec1229"]:c23(),["SharedCodec233"]:c24(),["SharedCodec312"]:c25(),["SharedCodec85"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
