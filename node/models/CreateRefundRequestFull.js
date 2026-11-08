import { d279 as c0 } from '../descriptors/data/16.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4429 as c1 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6525 as c2 } from '../descriptors/data/306.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6551 as c3, d6552 as c4, d6553 as c5 } from '../descriptors/data/308.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d279 as d279 } from '../descriptors/data/16.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d279;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequestFull"]:c0(),["MetadataRequest"]:c1(),["RefundDestinations"]:c2(),["SharedCodec295"]:c3(),["SharedCodec296"]:c4(),["SharedCodec297"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequestFull(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
