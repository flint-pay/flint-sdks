import { d1207 as c0 } from '../descriptors/data/57.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1207 as d1207 } from '../descriptors/data/57.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1207;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResolveCustomerDeletionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResolveCustomerDeletionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
