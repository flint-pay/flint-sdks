import { d4439 as c0, d4440 as c1, d4431 as c4, d4432 as c5, d4430 as c6 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6423 as c2 } from '../descriptors/data/300.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c3 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4419 as c7 } from '../descriptors/data/187.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4455 as c8 } from '../descriptors/data/189.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4173 as c9, d4174 as c10 } from '../descriptors/data/172.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4174 as d4174 } from '../descriptors/data/172.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4174;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec1366"]:c4(),["SharedCodec1367"]:c5(),["SharedCodec1368"]:c6(),["SharedCodec1369"]:c7(),["SharedCodec1370"]:c8(),["UpdateBundleComponentRequest"]:c9(),["UpdateBundleRequest"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateBundleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
