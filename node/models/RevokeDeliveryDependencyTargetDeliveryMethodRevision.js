import { d1281 as c0 } from '../descriptors/data/61.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5166 as c1, d5167 as c2 } from '../descriptors/data/229.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1281 as d1281 } from '../descriptors/data/61.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1281;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RevokeDeliveryDependencyTargetDeliveryMethodRevision"]:c0(),["SharedCodec1254"]:c1(),["SharedCodec1255"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyTargetDeliveryMethodRevision(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
