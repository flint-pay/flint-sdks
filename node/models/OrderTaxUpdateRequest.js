import { d8450 as c0 } from '../descriptors/data/376.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c1 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9883 as c2 } from '../descriptors/data/459.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9891 as c3, d9893 as c11, d9901 as c25, d9902 as c26, d9903 as c27, d9904 as c28, d9905 as c29, d9906 as c30 } from '../descriptors/data/460.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9354 as c4, d9355 as c5, d9356 as c6, d9357 as c7, d9358 as c8, d9359 as c9, d9360 as c10, d9362 as c12, d9363 as c13, d9364 as c14, d9365 as c15, d9366 as c16, d9367 as c17, d9368 as c18, d9369 as c19, d9370 as c20, d9371 as c21, d9372 as c22 } from '../descriptors/data/426.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9373 as c23, d9374 as c24, d9383 as c37, d9384 as c38 } from '../descriptors/data/427.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9016 as c31 } from '../descriptors/data/409.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8283 as c32, d8284 as c33, d8285 as c34, d8286 as c35 } from '../descriptors/data/367.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9977 as c36 } from '../descriptors/data/463.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9893 as d9893 } from '../descriptors/data/460.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9893;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["MoneyValue"]:c1(),["OrderChargeTaxAssignment"]:c2(),["OrderLineItemTaxAssignment"]:c3(),["OrderTaxCalculationRequest"]:c4(),["OrderTaxComponentRequest"]:c5(),["OrderTaxExemptionRequest"]:c6(),["OrderTaxJurisdictionRequest"]:c7(),["OrderTaxLocationFullAddressRequest"]:c8(),["OrderTaxLocationPostalAddressRequest"]:c9(),["OrderTaxLocationRequest"]:c10(),["OrderTaxUpdateRequest"]:c11(),["SharedCodec1964"]:c12(),["SharedCodec1965"]:c13(),["SharedCodec1966"]:c14(),["SharedCodec1967"]:c15(),["SharedCodec1968"]:c16(),["SharedCodec1969"]:c17(),["SharedCodec1973"]:c18(),["SharedCodec1974"]:c19(),["SharedCodec1975"]:c20(),["SharedCodec1976"]:c21(),["SharedCodec1977"]:c22(),["SharedCodec1980"]:c23(),["SharedCodec1981"]:c24(),["SharedCodec1993"]:c25(),["SharedCodec1994"]:c26(),["SharedCodec1995"]:c27(),["SharedCodec1996"]:c28(),["SharedCodec1997"]:c29(),["SharedCodec1998"]:c30(),["SharedCodec216"]:c31(),["SharedCodec684"]:c32(),["SharedCodec685"]:c33(),["SharedCodec686"]:c34(),["SharedCodec687"]:c35(),["TaxCalculationRequestModel"]:c36(),["TaxComponentRequestModel"]:c37(),["TaxJurisdictionRequestModel"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
