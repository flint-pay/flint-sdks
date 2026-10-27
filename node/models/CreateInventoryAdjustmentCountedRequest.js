import { d168 as c0 } from '../descriptors/data/8.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3987 as c1, d3990 as c7, d3992 as c8, d3993 as c9 } from '../descriptors/data/169.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4012 as c2, d4013 as c3, d4014 as c4, d4015 as c5, d4011 as c6, d4008 as c10, d4009 as c11, d4010 as c12 } from '../descriptors/data/170.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d168 as d168 } from '../descriptors/data/8.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d168;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentCountedRequest"]:c0(),["InventoryAdjustmentSetLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec147"]:c3(),["SharedCodec148"]:c4(),["SharedCodec149"]:c5(),["SharedCodec150"]:c6(),["SharedCodec151"]:c7(),["SharedCodec152"]:c8(),["SharedCodec153"]:c9(),["SharedCodec837"]:c10(),["SharedCodec838"]:c11(),["SharedCodec839"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentCountedRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
