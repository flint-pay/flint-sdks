import { d8135 as c0, d8133 as c7, d8134 as c8 } from '../descriptors/data/358.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8407 as c1 } from '../descriptors/data/373.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d260 as c2 } from '../descriptors/data/12.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8457 as c3, d8448 as c5, d8449 as c6 } from '../descriptors/data/376.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8035 as c4 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8437 as c9, d8445 as c10 } from '../descriptors/data/375.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d260 as d260 } from '../descriptors/data/12.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d260;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateCustomerAddressRequest"]:c1(),["CreateCustomerRequest"]:c2(),["DocumentTaxIDRequest"]:c3(),["MetadataRequest"]:c4(),["SharedCodec1716"]:c5(),["SharedCodec1717"]:c6(),["SharedCodec2"]:c7(),["SharedCodec3"]:c8(),["SharedCodec370"]:c9(),["TaxIdentityPatch"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
