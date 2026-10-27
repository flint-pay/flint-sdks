import { d4945 as c0 } from '../descriptors/data/225.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4917 as c1 } from '../descriptors/data/223.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4953 as c2, d4954 as c3, d4955 as c4, d4956 as c5, d4957 as c6 } from '../descriptors/data/226.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4945 as d4945 } from '../descriptors/data/225.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4945;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemRequest"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec1091"]:c2(),["SharedCodec1092"]:c3(),["SharedCodec1093"]:c4(),["SharedCodec1094"]:c5(),["SharedCodec1095"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
