import { d202 as c0 } from '../descriptors/data/11.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4936 as c1 } from '../descriptors/data/224.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4842 as c2, d4844 as c3, d4845 as c4, d4846 as c5 } from '../descriptors/data/218.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3996 as c6 } from '../descriptors/data/169.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d202 as d202 } from '../descriptors/data/11.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d202;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnInspectionRequest"]:c0(),["ReturnInspectionLineItemRequest"]:c1(),["ReturnSourceSystem"]:c2(),["SharedCodec1070"]:c3(),["SharedCodec1071"]:c4(),["SharedCodec1072"]:c5(),["SharedCodec145"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnInspectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
