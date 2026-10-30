import { d4281 as c0 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d933 as c1 } from '../descriptors/data/43.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d946 as c2 } from '../descriptors/data/44.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5650 as c3, d5651 as c4, d5652 as c5, d5653 as c6, d5654 as c7, d5655 as c8, d5661 as c11, d5662 as c12, d5663 as c13, d5664 as c14 } from '../descriptors/data/255.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d968 as c9 } from '../descriptors/data/45.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5350 as c10 } from '../descriptors/data/240.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6104 as c15, d6105 as c16, d6106 as c17, d6107 as c18, d6109 as c19, d6110 as c20, d6111 as c21 } from '../descriptors/data/282.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d968 as d968 } from '../descriptors/data/45.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d968;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderChargeTaxAssignment"]:c1(),["OrderLineItemTaxAssignment"]:c2(),["OrderTaxCalculationRequest"]:c3(),["OrderTaxComponentRequest"]:c4(),["OrderTaxJurisdictionRequest"]:c5(),["OrderTaxLocationFullAddressRequest"]:c6(),["OrderTaxLocationPostalAddressRequest"]:c7(),["OrderTaxLocationRequest"]:c8(),["OrderTaxUpdateRequest"]:c9(),["SharedCodec219"]:c10(),["SharedCodec910"]:c11(),["SharedCodec911"]:c12(),["SharedCodec912"]:c13(),["SharedCodec913"]:c14(),["SharedCodec917"]:c15(),["SharedCodec918"]:c16(),["SharedCodec919"]:c17(),["SharedCodec920"]:c18(),["TaxCalculationRequestModel"]:c19(),["TaxComponentRequestModel"]:c20(),["TaxJurisdictionRequest"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
