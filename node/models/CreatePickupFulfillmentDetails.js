import { d8135 as c0, d8133 as c2, d8134 as c3 } from '../descriptors/data/358.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8946 as c1 } from '../descriptors/data/404.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8946 as d8946 } from '../descriptors/data/404.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8946;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreatePickupFulfillmentDetails"]:c1(),["SharedCodec2"]:c2(),["SharedCodec3"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePickupFulfillmentDetails(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
