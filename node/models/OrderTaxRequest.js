import { d3013 as c0 } from '../descriptors/data/116.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4213 as c1, d4214 as c2, d4215 as c3, d4216 as c4, d4217 as c5, d4218 as c6, d4219 as c7, d4220 as c8 } from '../descriptors/data/179.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4221 as c9, d4222 as c10, d4223 as c11, d4226 as c13, d4227 as c14, d4228 as c15, d4229 as c16 } from '../descriptors/data/180.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3941 as c12 } from '../descriptors/data/167.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4223 as d4223 } from '../descriptors/data/180.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4223;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderTaxCalculationRequest"]:c1(),["OrderTaxComponentRequest"]:c2(),["OrderTaxJurisdictionRequest"]:c3(),["OrderTaxLocationFullAddressRequest"]:c4(),["OrderTaxLocationInputFullAddress"]:c5(),["OrderTaxLocationInputInferredFullAddress"]:c6(),["OrderTaxLocationInputInferredPostalCode"]:c7(),["OrderTaxLocationInputPostalCode"]:c8(),["OrderTaxLocationPostalAddressRequest"]:c9(),["OrderTaxLocationRequest"]:c10(),["OrderTaxRequest"]:c11(),["SharedCodec139"]:c12(),["SharedCodec982"]:c13(),["SharedCodec983"]:c14(),["SharedCodec984"]:c15(),["SharedCodec985"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
