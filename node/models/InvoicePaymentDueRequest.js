import { d4129 as c0 } from '../descriptors/data/175.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3354 as c1, d3355 as c2, d3357 as c3, d3359 as c4 } from '../descriptors/data/135.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4166 as c5, d4167 as c6, d4168 as c7, d4169 as c8, d4170 as c9, d4171 as c10, d4172 as c11 } from '../descriptors/data/177.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4129 as d4129 } from '../descriptors/data/175.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4129;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueRequest"]:c0(),["SharedCodec898"]:c1(),["SharedCodec899"]:c2(),["SharedCodec901"]:c3(),["SharedCodec903"]:c4(),["SharedCodec904"]:c5(),["SharedCodec905"]:c6(),["SharedCodec906"]:c7(),["SharedCodec907"]:c8(),["SharedCodec908"]:c9(),["SharedCodec909"]:c10(),["SharedCodec910"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
