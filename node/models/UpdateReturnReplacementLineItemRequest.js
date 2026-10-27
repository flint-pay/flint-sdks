import { d3013 as c0 } from '../descriptors/data/116.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4916 as c1, d4917 as c2, d4918 as c3, d4919 as c4, d4920 as c5 } from '../descriptors/data/223.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4944 as c6, d4945 as c7, d4946 as c8, d4953 as c10 } from '../descriptors/data/225.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3250 as c9 } from '../descriptors/data/130.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4953 as d4953 } from '../descriptors/data/225.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4953;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SharedCodec1104"]:c1(),["SharedCodec1105"]:c2(),["SharedCodec1106"]:c3(),["SharedCodec1107"]:c4(),["SharedCodec1108"]:c5(),["SharedCodec1227"]:c6(),["SharedCodec1228"]:c7(),["SharedCodec1229"]:c8(),["SharedCodec38"]:c9(),["UpdateReturnReplacementLineItemRequest"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnReplacementLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
