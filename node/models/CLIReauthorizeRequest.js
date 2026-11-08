import { d97 as c0 } from '../descriptors/data/4.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6022 as c1 } from '../descriptors/data/277.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d97 as d97 } from '../descriptors/data/4.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d97;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CLIReauthorizeRequest"]:c0(),["SharedCodec122"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCLIReauthorizeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
