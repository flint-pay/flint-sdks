import { d996 as c0 } from '../descriptors/data/47.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6197 as c1 } from '../descriptors/data/286.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6198 as c2, d6199 as c3, d6200 as c4, d6201 as c5, d6202 as c6, d6203 as c7, d6204 as c8 } from '../descriptors/data/287.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d996 as d996 } from '../descriptors/data/47.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d996;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PackageTransitionRequest"]:c0(),["SharedCodec943"]:c1(),["SharedCodec944"]:c2(),["SharedCodec945"]:c3(),["SharedCodec946"]:c4(),["SharedCodec947"]:c5(),["SharedCodec948"]:c6(),["SharedCodec949"]:c7(),["SharedCodec950"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
