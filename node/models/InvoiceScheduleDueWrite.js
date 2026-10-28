import { d4145 as c0 } from '../descriptors/data/176.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4188 as c1, d4189 as c2, d4190 as c3, d4191 as c4, d4192 as c5 } from '../descriptors/data/178.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4145 as d4145 } from '../descriptors/data/176.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4145;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleDueWrite"]:c0(),["SharedCodec937"]:c1(),["SharedCodec938"]:c2(),["SharedCodec939"]:c3(),["SharedCodec940"]:c4(),["SharedCodec941"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleDueWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
