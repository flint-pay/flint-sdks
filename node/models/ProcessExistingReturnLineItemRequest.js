import { d4429 as c0 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c1 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1117 as c2 } from '../descriptors/data/53.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1249 as c3, d1251 as c6 } from '../descriptors/data/59.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6731 as c4 } from '../descriptors/data/319.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6732 as c5, d6738 as c8, d6739 as c9 } from '../descriptors/data/320.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1267 as c7 } from '../descriptors/data/60.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6655 as c10 } from '../descriptors/data/314.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6656 as c11, d6657 as c12, d6658 as c13, d6659 as c14, d6663 as c15, d6664 as c16, d6665 as c17 } from '../descriptors/data/315.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6801 as c18 } from '../descriptors/data/323.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4633 as c19 } from '../descriptors/data/199.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1117 as d1117 } from '../descriptors/data/53.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1117;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["ProcessExistingReturnLineItemRequest"]:c2(),["ReturnProcessDecision"]:c3(),["ReturnProcessDispositionRequest"]:c4(),["ReturnProcessInspectionRequest"]:c5(),["ReturnProcessResolutionRequest"]:c6(),["ReturnReplacementLineItemRequest"]:c7(),["SharedCodec1186"]:c8(),["SharedCodec1187"]:c9(),["SharedCodec1222"]:c10(),["SharedCodec1223"]:c11(),["SharedCodec1224"]:c12(),["SharedCodec1225"]:c13(),["SharedCodec1226"]:c14(),["SharedCodec1227"]:c15(),["SharedCodec1228"]:c16(),["SharedCodec1229"]:c17(),["SharedCodec312"]:c18(),["SharedCodec85"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
