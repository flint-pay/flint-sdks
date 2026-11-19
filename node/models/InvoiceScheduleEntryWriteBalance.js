import { d9279 as c0, d9280 as c1 } from '../descriptors/data/422.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1149 as c2 } from '../descriptors/data/58.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c3 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8356 as c4, d8357 as c5, d8358 as c6, d8359 as c7, d8360 as c8, d8361 as c9, d8362 as c10 } from '../descriptors/data/371.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9299 as c11, d9300 as c12, d9301 as c13, d9302 as c14, d9303 as c15, d9307 as c16, d9309 as c17 } from '../descriptors/data/423.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9314 as c18, d9315 as c19, d9316 as c20 } from '../descriptors/data/424.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1149 as d1149 } from '../descriptors/data/58.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1149;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWriteBalance"]:c2(),["MoneyValue"]:c3(),["SharedCodec1665"]:c4(),["SharedCodec1666"]:c5(),["SharedCodec1667"]:c6(),["SharedCodec1668"]:c7(),["SharedCodec1669"]:c8(),["SharedCodec1670"]:c9(),["SharedCodec1671"]:c10(),["SharedCodec1686"]:c11(),["SharedCodec1687"]:c12(),["SharedCodec1688"]:c13(),["SharedCodec1689"]:c14(),["SharedCodec1690"]:c15(),["SharedCodec1698"]:c16(),["SharedCodec1700"]:c17(),["SharedCodec1705"]:c18(),["SharedCodec1706"]:c19(),["SharedCodec1707"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWriteBalance(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
