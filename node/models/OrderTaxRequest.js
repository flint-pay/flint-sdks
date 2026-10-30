import { d4281 as c0 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5650 as c1, d5651 as c2, d5652 as c3, d5653 as c4, d5654 as c5, d5655 as c6, d5656 as c7, d5661 as c9, d5662 as c10, d5663 as c11, d5664 as c12, d5665 as c13, d5666 as c14, d5667 as c15 } from '../descriptors/data/255.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5350 as c8 } from '../descriptors/data/240.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5656 as d5656 } from '../descriptors/data/255.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5656;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderTaxCalculationRequest"]:c1(),["OrderTaxComponentRequest"]:c2(),["OrderTaxJurisdictionRequest"]:c3(),["OrderTaxLocationFullAddressRequest"]:c4(),["OrderTaxLocationPostalAddressRequest"]:c5(),["OrderTaxLocationRequest"]:c6(),["OrderTaxRequest"]:c7(),["SharedCodec219"]:c8(),["SharedCodec910"]:c9(),["SharedCodec911"]:c10(),["SharedCodec912"]:c11(),["SharedCodec913"]:c12(),["SharedCodec914"]:c13(),["SharedCodec915"]:c14(),["SharedCodec916"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
