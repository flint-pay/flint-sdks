import { d3394 as c0, d3396 as c2, d3397 as c3, d3398 as c4, d3399 as c5 } from '../descriptors/data/137.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3394 as d3394 } from '../descriptors/data/137.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3394;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteCorrectionRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec240"]:c2(),["SharedCodec241"]:c3(),["SharedCodec242"]:c4(),["SharedCodec243"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreditNoteCorrectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
