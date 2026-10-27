import { d4209 as c0 } from '../descriptors/data/179.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3941 as c2 } from '../descriptors/data/167.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4224 as c3, d4225 as c4 } from '../descriptors/data/180.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4209 as d4209 } from '../descriptors/data/179.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4209;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderTip"]:c0(),["MoneyValue"]:c1(),["SharedCodec139"]:c2(),["SharedCodec180"]:c3(),["SharedCodec181"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderTip(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
