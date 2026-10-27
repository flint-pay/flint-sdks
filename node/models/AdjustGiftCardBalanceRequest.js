import { d11 as c0 } from '../descriptors/data/0.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3029 as c1 } from '../descriptors/data/117.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d11 as d11 } from '../descriptors/data/0.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d11;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AdjustGiftCardBalanceRequest"]:c0(),["SignedMoney"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAdjustGiftCardBalanceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
