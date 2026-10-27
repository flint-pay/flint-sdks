import { d227 as c0 } from '../descriptors/data/13.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3034 as c1, d3041 as c6, d3042 as c7 } from '../descriptors/data/117.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3018 as c2 } from '../descriptors/data/115.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3768 as c3, d3769 as c4, d3770 as c5 } from '../descriptors/data/157.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d227 as d227 } from '../descriptors/data/13.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d227;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSandboxRequest"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2(),["SharedCodec218"]:c3(),["SharedCodec219"]:c4(),["SharedCodec220"]:c5(),["SharedCodec52"]:c6(),["SharedCodec53"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSandboxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
