import { d314 as c0 } from '../descriptors/data/18.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4382 as c1, d4383 as c4, d4384 as c5 } from '../descriptors/data/185.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4331 as c2 } from '../descriptors/data/182.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6849 as c3, d6850 as c6, d6851 as c7 } from '../descriptors/data/326.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d314 as d314 } from '../descriptors/data/18.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d314;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSandboxRequest"]:c0(),["SharedCodec130"]:c1(),["SharedCodec3"]:c2(),["SharedCodec319"]:c3(),["SharedCodec320"]:c4(),["SharedCodec321"]:c5(),["SharedCodec322"]:c6(),["SharedCodec323"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSandboxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
