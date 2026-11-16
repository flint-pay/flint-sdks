import { d7995 as c0 } from '../descriptors/data/370.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8014 as c1, d8015 as c2, d8016 as c3, d8017 as c4, d8018 as c5 } from '../descriptors/data/371.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7995 as d7995 } from '../descriptors/data/370.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7995;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleDueWrite"]:c0(),["SharedCodec1295"]:c1(),["SharedCodec1296"]:c2(),["SharedCodec1297"]:c3(),["SharedCodec1298"]:c4(),["SharedCodec1299"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleDueWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
