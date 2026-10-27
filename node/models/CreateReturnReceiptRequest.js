import { d214 as c0 } from '../descriptors/data/12.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4945 as c1 } from '../descriptors/data/225.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4842 as c2, d4844 as c4, d4845 as c5, d4846 as c6 } from '../descriptors/data/218.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4917 as c3 } from '../descriptors/data/223.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4953 as c7, d4954 as c8, d4955 as c9, d4956 as c10, d4957 as c11 } from '../descriptors/data/226.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3996 as c12 } from '../descriptors/data/169.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d214 as d214 } from '../descriptors/data/12.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d214;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReceiptRequest"]:c0(),["ReturnReceiptLineItemRequest"]:c1(),["ReturnSourceSystem"]:c2(),["ReturnUnverifiedItem"]:c3(),["SharedCodec1070"]:c4(),["SharedCodec1071"]:c5(),["SharedCodec1072"]:c6(),["SharedCodec1091"]:c7(),["SharedCodec1092"]:c8(),["SharedCodec1093"]:c9(),["SharedCodec1094"]:c10(),["SharedCodec1095"]:c11(),["SharedCodec145"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
