import { d7976 as c0 } from '../descriptors/data/369.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7023 as c1, d7024 as c2, d7025 as c3, d7026 as c4, d7027 as c5, d7028 as c6, d7029 as c7, d7030 as c8, d7031 as c9, d7032 as c10, d7033 as c11 } from '../descriptors/data/316.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7976 as d7976 } from '../descriptors/data/369.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7976;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["SharedCodec1268"]:c1(),["SharedCodec1269"]:c2(),["SharedCodec1270"]:c3(),["SharedCodec1271"]:c4(),["SharedCodec1272"]:c5(),["SharedCodec1273"]:c6(),["SharedCodec1274"]:c7(),["SharedCodec1275"]:c8(),["SharedCodec1276"]:c9(),["SharedCodec1277"]:c10(),["SharedCodec1278"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
