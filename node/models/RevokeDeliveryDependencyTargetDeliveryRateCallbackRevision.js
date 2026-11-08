import { d1283 as c0 } from '../descriptors/data/61.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5160 as c1, d5161 as c2 } from '../descriptors/data/229.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1283 as d1283 } from '../descriptors/data/61.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1283;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RevokeDeliveryDependencyTargetDeliveryRateCallbackRevision"]:c0(),["SharedCodec1248"]:c1(),["SharedCodec1249"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyTargetDeliveryRateCallbackRevision(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
