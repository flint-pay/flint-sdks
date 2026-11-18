import { d9239 as c0 } from '../descriptors/data/414.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8295 as c1, d8296 as c2, d8297 as c3, d8298 as c4, d8299 as c5, d8300 as c6, d8301 as c7, d8302 as c8, d8303 as c9, d8304 as c10, d8305 as c11 } from '../descriptors/data/362.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9239 as d9239 } from '../descriptors/data/414.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9239;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["SharedCodec1633"]:c1(),["SharedCodec1634"]:c2(),["SharedCodec1635"]:c3(),["SharedCodec1636"]:c4(),["SharedCodec1637"]:c5(),["SharedCodec1638"]:c6(),["SharedCodec1639"]:c7(),["SharedCodec1640"]:c8(),["SharedCodec1641"]:c9(),["SharedCodec1642"]:c10(),["SharedCodec1643"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
