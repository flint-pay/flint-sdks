import { d6 as c0 } from '../descriptors/data/0.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3151 as c2 } from '../descriptors/data/124.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4530 as c3 } from '../descriptors/data/199.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4224 as c4, d4225 as c5 } from '../descriptors/data/180.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3158 as c6, d3159 as c7, d3160 as c8 } from '../descriptors/data/125.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d6 as d6 } from '../descriptors/data/0.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddOrderChargeRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedChargeTax"]:c2(),["OrderChargeRequest"]:c3(),["SharedCodec180"]:c4(),["SharedCodec181"]:c5(),["TaxCalculationRequest"]:c6(),["TaxComponentRequest"]:c7(),["TaxJurisdiction"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddOrderChargeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
