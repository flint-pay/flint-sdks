import { d3013 as c0 } from '../descriptors/data/116.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3151 as c1 } from '../descriptors/data/124.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3158 as c2, d3159 as c3, d3160 as c4 } from '../descriptors/data/125.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2461 as c5 } from '../descriptors/data/99.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2461 as d2461 } from '../descriptors/data/99.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2461;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderCalculatedChargeTax"]:c1(),["TaxCalculationRequest"]:c2(),["TaxComponentRequest"]:c3(),["TaxJurisdiction"]:c4(),["UpdateOrderChargeRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateOrderChargeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
