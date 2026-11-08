import { d4677 as c0, d4678 as c1 } from '../descriptors/data/201.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4129 as c2 } from '../descriptors/data/170.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4129 as d4129 } from '../descriptors/data/170.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4129;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec101"]:c0(),["SharedCodec102"]:c1(),["SubscriptionPlanTermsRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanTermsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
