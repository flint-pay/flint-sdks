import { d998 as c0 } from '../descriptors/data/47.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d998 as d998 } from '../descriptors/data/47.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d998;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PackageTransitionRequestMarkDeliveryAttempted"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageTransitionRequestMarkDeliveryAttempted(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
