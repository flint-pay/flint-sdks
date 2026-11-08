import { d872 as c0 } from '../descriptors/data/41.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4382 as c1 } from '../descriptors/data/185.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4331 as c2 } from '../descriptors/data/182.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d872 as d872 } from '../descriptors/data/41.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d872;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IssueSandboxAPIKeyRequestFull"]:c0(),["SharedCodec130"]:c1(),["SharedCodec3"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIssueSandboxAPIKeyRequestFull(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
