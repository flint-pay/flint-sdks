import { d3013 as c0 } from '../descriptors/data/116.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4213 as c1, d4214 as c2, d4215 as c3 } from '../descriptors/data/179.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3941 as c4 } from '../descriptors/data/167.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4226 as c5, d4227 as c6 } from '../descriptors/data/180.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4213 as d4213 } from '../descriptors/data/179.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4213;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderTaxCalculationRequest"]:c1(),["OrderTaxComponentRequest"]:c2(),["OrderTaxJurisdictionRequest"]:c3(),["SharedCodec139"]:c4(),["SharedCodec982"]:c5(),["SharedCodec983"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxCalculationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
