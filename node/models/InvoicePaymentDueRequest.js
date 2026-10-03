import { d389 as c0, d384 as c1, d383 as c2, d385 as c3, d386 as c4, d387 as c5, d388 as c6 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d389 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d389;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueRequest"]:c0(),["SharedCodec136"]:c1(),["SharedCodec137"]:c2(),["SharedCodec138"]:c3(),["SharedCodec139"]:c4(),["SharedCodec140"]:c5(),["SharedCodec141"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
