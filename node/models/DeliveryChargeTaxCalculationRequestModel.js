import { d9350 as c0 } from '../descriptors/data/425.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c1 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9383 as c2, d9384 as c3 } from '../descriptors/data/427.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9350 as d9350 } from '../descriptors/data/425.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9350;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryChargeTaxCalculationRequestModel"]:c0(),["MoneyValue"]:c1(),["TaxComponentRequestModel"]:c2(),["TaxJurisdictionRequestModel"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryChargeTaxCalculationRequestModel(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
