import { d7976 as c0, d7977 as c17, d7978 as c18 } from '../descriptors/data/369.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c1 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7019 as c2, d7020 as c3 } from '../descriptors/data/315.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7021 as c4, d7022 as c5, d7023 as c6, d7024 as c7, d7025 as c8, d7026 as c9, d7027 as c10, d7028 as c11, d7029 as c12, d7030 as c13, d7031 as c14, d7032 as c15, d7033 as c16 } from '../descriptors/data/316.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6486 as c19 } from '../descriptors/data/280.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6486 as d6486 } from '../descriptors/data/280.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6486;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec101"]:c2(),["SharedCodec102"]:c3(),["SharedCodec103"]:c4(),["SharedCodec104"]:c5(),["SharedCodec1268"]:c6(),["SharedCodec1269"]:c7(),["SharedCodec1270"]:c8(),["SharedCodec1271"]:c9(),["SharedCodec1272"]:c10(),["SharedCodec1273"]:c11(),["SharedCodec1274"]:c12(),["SharedCodec1275"]:c13(),["SharedCodec1276"]:c14(),["SharedCodec1277"]:c15(),["SharedCodec1278"]:c16(),["SharedCodec2438"]:c17(),["SharedCodec2439"]:c18(),["UpdateInvoicePaymentTermRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
