import { d305 as c0 } from '../descriptors/data/18.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4429 as c1 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c2 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1268 as c3 } from '../descriptors/data/60.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6672 as c4, d6673 as c5 } from '../descriptors/data/316.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6801 as c6 } from '../descriptors/data/323.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5919 as c7 } from '../descriptors/data/271.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d305 as d305 } from '../descriptors/data/18.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d305;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionRequestCorrection"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["ReturnResolutionAdjustmentRequest"]:c3(),["SharedCodec310"]:c4(),["SharedCodec311"]:c5(),["SharedCodec312"]:c6(),["SharedCodec37"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionRequestCorrection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
