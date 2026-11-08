import { d1285 as c0 } from '../descriptors/data/61.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5151 as c1, d5152 as c2 } from '../descriptors/data/228.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1285 as d1285 } from '../descriptors/data/61.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1285;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RevokeDeliveryDependencyTargetLocationGeography"]:c0(),["SharedCodec1239"]:c1(),["SharedCodec1240"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyTargetLocationGeography(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
