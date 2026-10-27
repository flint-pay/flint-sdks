import { d215 as c0 } from '../descriptors/data/12.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4973 as c1 } from '../descriptors/data/227.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4862 as c2, d4864 as c4, d4865 as c5, d4866 as c6 } from '../descriptors/data/219.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4942 as c3 } from '../descriptors/data/225.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4981 as c7, d4982 as c8, d4983 as c9, d4984 as c10, d4985 as c11, d4986 as c12 } from '../descriptors/data/228.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4011 as c13 } from '../descriptors/data/170.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d215 as d215 } from '../descriptors/data/12.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d215;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReceiptRequest"]:c0(),["ReturnReceiptLineItemRequest"]:c1(),["ReturnSourceSystem"]:c2(),["ReturnUnverifiedItem"]:c3(),["SharedCodec1075"]:c4(),["SharedCodec1076"]:c5(),["SharedCodec1077"]:c6(),["SharedCodec1098"]:c7(),["SharedCodec1099"]:c8(),["SharedCodec1100"]:c9(),["SharedCodec1101"]:c10(),["SharedCodec1102"]:c11(),["SharedCodec1103"]:c12(),["SharedCodec150"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
