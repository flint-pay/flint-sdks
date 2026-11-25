import { d9384 as c0 } from '../descriptors/data/426.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8444 as c1, d8445 as c2, d8447 as c3, d8449 as c4 } from '../descriptors/data/374.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9399 as c5, d9400 as c6, d9401 as c7, d9402 as c8, d9403 as c9, d9404 as c10, d9405 as c11 } from '../descriptors/data/427.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9384 as d9384 } from '../descriptors/data/426.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9384;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueRequest"]:c0(),["SharedCodec1641"]:c1(),["SharedCodec1642"]:c2(),["SharedCodec1644"]:c3(),["SharedCodec1646"]:c4(),["SharedCodec1649"]:c5(),["SharedCodec1650"]:c6(),["SharedCodec1657"]:c7(),["SharedCodec1658"]:c8(),["SharedCodec1659"]:c9(),["SharedCodec1660"]:c10(),["SharedCodec1661"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
