import { d4312 as c0 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1186 as c1 } from '../descriptors/data/56.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6529 as c2, d6530 as c3, d6531 as c4, d6532 as c5 } from '../descriptors/data/306.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5381 as c6 } from '../descriptors/data/241.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1186 as d1186 } from '../descriptors/data/56.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1186;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RefundTenderAllocationRequest"]:c1(),["SharedCodec1136"]:c2(),["SharedCodec1137"]:c3(),["SharedCodec1138"]:c4(),["SharedCodec1139"]:c5(),["SharedCodec221"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundTenderAllocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
