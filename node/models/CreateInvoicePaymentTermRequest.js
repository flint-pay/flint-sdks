import { d314 as c0 } from '../descriptors/data/16.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9237 as c1, d9239 as c2 } from '../descriptors/data/414.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7885 as c3 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8291 as c4, d8292 as c5, d8293 as c6, d8294 as c7, d8295 as c8, d8296 as c9, d8297 as c10, d8298 as c11, d8299 as c12, d8300 as c13, d8301 as c14, d8302 as c15, d8303 as c16, d8304 as c17, d8305 as c18 } from '../descriptors/data/362.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d314 as d314 } from '../descriptors/data/16.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d314;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInvoicePaymentTermRequest"]:c0(),["InvoiceLateFeePolicyRequest"]:c1(),["InvoicePaymentTermCalculationRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec119"]:c4(),["SharedCodec120"]:c5(),["SharedCodec121"]:c6(),["SharedCodec122"]:c7(),["SharedCodec1633"]:c8(),["SharedCodec1634"]:c9(),["SharedCodec1635"]:c10(),["SharedCodec1636"]:c11(),["SharedCodec1637"]:c12(),["SharedCodec1638"]:c13(),["SharedCodec1639"]:c14(),["SharedCodec1640"]:c15(),["SharedCodec1641"]:c16(),["SharedCodec1642"]:c17(),["SharedCodec1643"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
