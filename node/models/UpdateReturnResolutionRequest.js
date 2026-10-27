import { d3013 as c0 } from '../descriptors/data/116.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4916 as c1, d4917 as c2, d4918 as c3, d4919 as c4, d4920 as c5 } from '../descriptors/data/223.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3410 as c6 } from '../descriptors/data/138.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4944 as c7, d4945 as c8, d4946 as c9, d4947 as c10, d4948 as c11, d4953 as c13, d4954 as c14, d4955 as c15 } from '../descriptors/data/225.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3250 as c12 } from '../descriptors/data/130.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2487 as c16 } from '../descriptors/data/101.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2487 as d2487 } from '../descriptors/data/101.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2487;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SharedCodec1104"]:c1(),["SharedCodec1105"]:c2(),["SharedCodec1106"]:c3(),["SharedCodec1107"]:c4(),["SharedCodec1108"]:c5(),["SharedCodec1174"]:c6(),["SharedCodec1227"]:c7(),["SharedCodec1228"]:c8(),["SharedCodec1229"]:c9(),["SharedCodec1230"]:c10(),["SharedCodec1231"]:c11(),["SharedCodec38"]:c12(),["UpdateReturnReplacementLineItemRequest"]:c13(),["UpdateReturnResolutionAdjustmentRequest"]:c14(),["UpdateReturnResolutionLineItemRequest"]:c15(),["UpdateReturnResolutionRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
