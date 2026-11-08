import { d6607 as c0 } from '../descriptors/data/311.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6624 as c1 } from '../descriptors/data/312.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6625 as c2, d6626 as c3, d6627 as c4 } from '../descriptors/data/313.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6607 as d6607 } from '../descriptors/data/311.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6607;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnPolicyScope"]:c0(),["SharedCodec1204"]:c1(),["SharedCodec1205"]:c2(),["SharedCodec1206"]:c3(),["SharedCodec1207"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyScope(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
