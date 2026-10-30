import { d4398 as c0 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c1 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4498 as c2 } from '../descriptors/data/192.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d930 as c3 } from '../descriptors/data/43.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5658 as c4 } from '../descriptors/data/255.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4505 as c5, d4506 as c6, d4507 as c7 } from '../descriptors/data/193.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d930 as d930 } from '../descriptors/data/43.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d930;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedChargeTax"]:c2(),["OrderChargeInputAmount"]:c3(),["SharedCodec273"]:c4(),["TaxCalculationRequest"]:c5(),["TaxComponentRequest"]:c6(),["TaxJurisdiction"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderChargeInputAmount(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
