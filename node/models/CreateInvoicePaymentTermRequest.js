import { d279 as c0 } from '../descriptors/data/14.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7974 as c1, d7976 as c2 } from '../descriptors/data/369.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c3 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7019 as c4, d7020 as c5 } from '../descriptors/data/315.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7021 as c6, d7022 as c7, d7023 as c8, d7024 as c9, d7025 as c10, d7026 as c11, d7027 as c12, d7028 as c13, d7029 as c14, d7030 as c15, d7031 as c16, d7032 as c17, d7033 as c18 } from '../descriptors/data/316.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d279 as d279 } from '../descriptors/data/14.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d279;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInvoicePaymentTermRequest"]:c0(),["InvoiceLateFeePolicyRequest"]:c1(),["InvoicePaymentTermCalculationRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec101"]:c4(),["SharedCodec102"]:c5(),["SharedCodec103"]:c6(),["SharedCodec104"]:c7(),["SharedCodec1268"]:c8(),["SharedCodec1269"]:c9(),["SharedCodec1270"]:c10(),["SharedCodec1271"]:c11(),["SharedCodec1272"]:c12(),["SharedCodec1273"]:c13(),["SharedCodec1274"]:c14(),["SharedCodec1275"]:c15(),["SharedCodec1276"]:c16(),["SharedCodec1277"]:c17(),["SharedCodec1278"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
