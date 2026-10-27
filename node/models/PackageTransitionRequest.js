import { d818 as c0 } from '../descriptors/data/35.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3875 as c1 } from '../descriptors/data/163.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4600 as c2, d4601 as c3 } from '../descriptors/data/203.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4602 as c4, d4603 as c5, d4604 as c6, d4605 as c7, d4606 as c8 } from '../descriptors/data/204.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d818 as d818 } from '../descriptors/data/35.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d818;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PackageTransitionRequest"]:c0(),["SharedCodec361"]:c1(),["SharedCodec986"]:c2(),["SharedCodec987"]:c3(),["SharedCodec988"]:c4(),["SharedCodec989"]:c5(),["SharedCodec990"]:c6(),["SharedCodec991"]:c7(),["SharedCodec992"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
