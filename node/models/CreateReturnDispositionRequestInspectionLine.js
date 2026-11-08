import { d6724 as c0 } from '../descriptors/data/318.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4429 as c1 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6724 as d6724 } from '../descriptors/data/318.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6724;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnDispositionRequestInspectionLine"]:c0(),["MetadataRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnDispositionRequestInspectionLine(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
