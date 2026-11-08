import { d1250 as c0 } from '../descriptors/data/59.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6735 as c1 } from '../descriptors/data/320.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6600 as c2, d6601 as c3, d6602 as c4 } from '../descriptors/data/311.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5450 as c5 } from '../descriptors/data/244.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1250 as d1250 } from '../descriptors/data/59.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1250;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnProcessReceiptRequest"]:c0(),["ReturnSourceSystemRequest"]:c1(),["SharedCodec1177"]:c2(),["SharedCodec1178"]:c3(),["SharedCodec1179"]:c4(),["SharedCodec233"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
