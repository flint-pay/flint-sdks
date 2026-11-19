import { d8450 as c0 } from '../descriptors/data/376.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9350 as c1 } from '../descriptors/data/425.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c2 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9354 as c3, d9355 as c4, d9356 as c5, d9357 as c6, d9358 as c7, d9359 as c8, d9360 as c9, d9361 as c10, d9362 as c11, d9363 as c12, d9364 as c13, d9365 as c14, d9366 as c15, d9367 as c16, d9368 as c17, d9369 as c18, d9370 as c19, d9371 as c20, d9372 as c21 } from '../descriptors/data/426.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9373 as c22, d9374 as c23, d9375 as c24, d9376 as c25, d9377 as c26, d9378 as c27, d9383 as c33, d9384 as c34 } from '../descriptors/data/427.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9016 as c28 } from '../descriptors/data/409.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8283 as c29, d8284 as c30, d8285 as c31, d8286 as c32 } from '../descriptors/data/367.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9361 as d9361 } from '../descriptors/data/426.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9361;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["DeliveryChargeTaxCalculationRequestModel"]:c1(),["MoneyValue"]:c2(),["OrderTaxCalculationRequest"]:c3(),["OrderTaxComponentRequest"]:c4(),["OrderTaxExemptionRequest"]:c5(),["OrderTaxJurisdictionRequest"]:c6(),["OrderTaxLocationFullAddressRequest"]:c7(),["OrderTaxLocationPostalAddressRequest"]:c8(),["OrderTaxLocationRequest"]:c9(),["OrderTaxRequest"]:c10(),["SharedCodec1964"]:c11(),["SharedCodec1965"]:c12(),["SharedCodec1966"]:c13(),["SharedCodec1967"]:c14(),["SharedCodec1968"]:c15(),["SharedCodec1969"]:c16(),["SharedCodec1973"]:c17(),["SharedCodec1974"]:c18(),["SharedCodec1975"]:c19(),["SharedCodec1976"]:c20(),["SharedCodec1977"]:c21(),["SharedCodec1980"]:c22(),["SharedCodec1981"]:c23(),["SharedCodec1989"]:c24(),["SharedCodec1990"]:c25(),["SharedCodec1991"]:c26(),["SharedCodec1992"]:c27(),["SharedCodec216"]:c28(),["SharedCodec684"]:c29(),["SharedCodec685"]:c30(),["SharedCodec686"]:c31(),["SharedCodec687"]:c32(),["TaxComponentRequestModel"]:c33(),["TaxJurisdictionRequestModel"]:c34()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
