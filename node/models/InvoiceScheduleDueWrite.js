import { d9280 as c0 } from '../descriptors/data/422.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9299 as c1, d9300 as c2, d9301 as c3, d9302 as c4, d9303 as c5 } from '../descriptors/data/423.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9280 as d9280 } from '../descriptors/data/422.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9280;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleDueWrite"]:c0(),["SharedCodec1686"]:c1(),["SharedCodec1687"]:c2(),["SharedCodec1688"]:c3(),["SharedCodec1689"]:c4(),["SharedCodec1690"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleDueWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
