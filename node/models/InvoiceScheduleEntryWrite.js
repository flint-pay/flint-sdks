import { d9257 as c0, d9258 as c1, d9259 as c2 } from '../descriptors/data/415.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7885 as c3 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8334 as c4, d8335 as c5, d8336 as c6, d8337 as c7, d8338 as c8, d8339 as c9, d8340 as c10 } from '../descriptors/data/364.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9277 as c11, d9278 as c12, d9279 as c13, d9280 as c14, d9281 as c15, d9282 as c16, d9283 as c17, d9284 as c18, d9285 as c19, d9286 as c20, d9287 as c21, d9288 as c22, d9289 as c23, d9290 as c24, d9291 as c25, d9292 as c26 } from '../descriptors/data/416.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9293 as c27, d9294 as c28 } from '../descriptors/data/417.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9259 as d9259 } from '../descriptors/data/415.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9259;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWrite"]:c2(),["MoneyValue"]:c3(),["SharedCodec1664"]:c4(),["SharedCodec1665"]:c5(),["SharedCodec1666"]:c6(),["SharedCodec1667"]:c7(),["SharedCodec1668"]:c8(),["SharedCodec1669"]:c9(),["SharedCodec1670"]:c10(),["SharedCodec1685"]:c11(),["SharedCodec1686"]:c12(),["SharedCodec1687"]:c13(),["SharedCodec1688"]:c14(),["SharedCodec1689"]:c15(),["SharedCodec1694"]:c16(),["SharedCodec1695"]:c17(),["SharedCodec1696"]:c18(),["SharedCodec1697"]:c19(),["SharedCodec1698"]:c20(),["SharedCodec1699"]:c21(),["SharedCodec1700"]:c22(),["SharedCodec1701"]:c23(),["SharedCodec1702"]:c24(),["SharedCodec1703"]:c25(),["SharedCodec1704"]:c26(),["SharedCodec1705"]:c27(),["SharedCodec1706"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
