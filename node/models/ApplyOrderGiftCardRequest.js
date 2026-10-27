import { d15 as c0 } from '../descriptors/data/0.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d15 as d15 } from '../descriptors/data/0.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d15;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ApplyOrderGiftCardRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeApplyOrderGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
