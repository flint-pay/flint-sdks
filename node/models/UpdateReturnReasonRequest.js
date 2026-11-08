import { d6675 as c0 } from '../descriptors/data/316.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4230 as c1 } from '../descriptors/data/176.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4230 as d4230 } from '../descriptors/data/176.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4230;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1442"]:c0(),["UpdateReturnReasonRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnReasonRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
