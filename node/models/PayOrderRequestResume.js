import { d4312 as c0 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1028 as c1 } from '../descriptors/data/48.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6080 as c2, d6081 as c3, d6082 as c4 } from '../descriptors/data/280.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1028 as d1028 } from '../descriptors/data/48.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1028;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PayOrderRequestResume"]:c1(),["SharedCodec1046"]:c2(),["SharedCodec1047"]:c3(),["SharedCodec1048"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestResume(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
