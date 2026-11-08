import { d304 as c0 } from '../descriptors/data/17.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4429 as c1 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c2 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1267 as c3, d1268 as c4, d1271 as c5 } from '../descriptors/data/60.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6655 as c6 } from '../descriptors/data/314.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6656 as c7, d6657 as c8, d6658 as c9, d6659 as c10, d6663 as c11, d6664 as c12, d6665 as c13 } from '../descriptors/data/315.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6671 as c14, d6672 as c15, d6673 as c16 } from '../descriptors/data/316.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6801 as c17 } from '../descriptors/data/323.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d2171 as c18 } from '../descriptors/data/92.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d2182 as c19 } from '../descriptors/data/93.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5919 as c20 } from '../descriptors/data/271.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4633 as c21 } from '../descriptors/data/199.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d304 as d304 } from '../descriptors/data/17.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d304;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["ReturnReplacementLineItemRequest"]:c3(),["ReturnResolutionAdjustmentRequest"]:c4(),["ReturnResolutionLineItemRequest"]:c5(),["SharedCodec1222"]:c6(),["SharedCodec1223"]:c7(),["SharedCodec1224"]:c8(),["SharedCodec1225"]:c9(),["SharedCodec1226"]:c10(),["SharedCodec1227"]:c11(),["SharedCodec1228"]:c12(),["SharedCodec1229"]:c13(),["SharedCodec308"]:c14(),["SharedCodec310"]:c15(),["SharedCodec311"]:c16(),["SharedCodec312"]:c17(),["SharedCodec313"]:c18(),["SharedCodec314"]:c19(),["SharedCodec37"]:c20(),["SharedCodec85"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
