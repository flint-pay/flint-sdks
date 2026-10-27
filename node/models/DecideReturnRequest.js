import { d267 as c0 } from '../descriptors/data/15.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4937 as c1 } from '../descriptors/data/224.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4949 as c2, d4950 as c3 } from '../descriptors/data/226.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d267 as d267 } from '../descriptors/data/15.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d267;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DecideReturnRequest"]:c0(),["ReturnLineDecision"]:c1(),["SharedCodec1073"]:c2(),["SharedCodec1074"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDecideReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
