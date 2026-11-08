import { d4862 as c0, d4863 as c6, d4864 as c7 } from '../descriptors/data/213.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4539 as c1, d4540 as c2 } from '../descriptors/data/194.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4431 as c3, d4432 as c4, d4430 as c5 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4838 as c8, d4839 as c9 } from '../descriptors/data/211.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4840 as c10, d4852 as c11, d4853 as c12 } from '../descriptors/data/212.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4180 as c13 } from '../descriptors/data/172.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4180 as d4180 } from '../descriptors/data/172.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4180;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DocumentTaxIDRequest"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2(),["SharedCodec1366"]:c3(),["SharedCodec1367"]:c4(),["SharedCodec1368"]:c5(),["SharedCodec1373"]:c6(),["SharedCodec1374"]:c7(),["SharedCodec1375"]:c8(),["SharedCodec1376"]:c9(),["SharedCodec1377"]:c10(),["SharedCodec843"]:c11(),["SharedCodec844"]:c12(),["UpdateCustomerRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
