import { d9255 as c0 } from '../descriptors/data/415.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8319 as c1, d8320 as c2, d8322 as c3, d8324 as c4 } from '../descriptors/data/363.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9270 as c5, d9271 as c6, d9272 as c7, d9273 as c8, d9274 as c9, d9275 as c10, d9276 as c11 } from '../descriptors/data/416.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9255 as d9255 } from '../descriptors/data/415.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9255;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueRequest"]:c0(),["SharedCodec1609"]:c1(),["SharedCodec1610"]:c2(),["SharedCodec1612"]:c3(),["SharedCodec1614"]:c4(),["SharedCodec1617"]:c5(),["SharedCodec1618"]:c6(),["SharedCodec1625"]:c7(),["SharedCodec1626"]:c8(),["SharedCodec1627"]:c9(),["SharedCodec1628"]:c10(),["SharedCodec1629"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
