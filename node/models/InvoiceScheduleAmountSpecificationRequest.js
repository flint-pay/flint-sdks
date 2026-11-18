import { d9257 as c0 } from '../descriptors/data/415.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7885 as c1 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8334 as c2, d8335 as c3, d8336 as c4, d8337 as c5, d8338 as c6, d8339 as c7, d8340 as c8 } from '../descriptors/data/364.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9257 as d9257 } from '../descriptors/data/415.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9257;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec1664"]:c2(),["SharedCodec1665"]:c3(),["SharedCodec1666"]:c4(),["SharedCodec1667"]:c5(),["SharedCodec1668"]:c6(),["SharedCodec1669"]:c7(),["SharedCodec1670"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleAmountSpecificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
