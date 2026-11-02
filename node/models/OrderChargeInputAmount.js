import { d4398 as c0 } from '../descriptors/data/187.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4281 as c1 } from '../descriptors/data/180.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4498 as c2 } from '../descriptors/data/192.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d930 as c3 } from '../descriptors/data/43.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5658 as c4 } from '../descriptors/data/255.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4505 as c5, d4506 as c6, d4507 as c7 } from '../descriptors/data/193.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d930 as d930 } from '../descriptors/data/43.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d930;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedChargeTax"]:c2(),["OrderChargeInputAmount"]:c3(),["SharedCodec273"]:c4(),["TaxCalculationRequest"]:c5(),["TaxComponentRequest"]:c6(),["TaxJurisdiction"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderChargeInputAmount(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
