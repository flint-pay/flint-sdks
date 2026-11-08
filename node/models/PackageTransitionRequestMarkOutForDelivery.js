import { d1001 as c0 } from '../descriptors/data/47.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1001 as d1001 } from '../descriptors/data/47.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1001;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PackageTransitionRequestMarkOutForDelivery"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageTransitionRequestMarkOutForDelivery(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
