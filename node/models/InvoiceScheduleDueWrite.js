import { d9258 as c0 } from '../descriptors/data/415.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9277 as c1, d9278 as c2, d9279 as c3, d9280 as c4, d9281 as c5 } from '../descriptors/data/416.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9258 as d9258 } from '../descriptors/data/415.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9258;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleDueWrite"]:c0(),["SharedCodec1685"]:c1(),["SharedCodec1686"]:c2(),["SharedCodec1687"]:c3(),["SharedCodec1688"]:c4(),["SharedCodec1689"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleDueWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
