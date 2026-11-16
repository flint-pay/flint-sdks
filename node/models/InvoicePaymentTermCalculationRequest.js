import { d7976 as c0 } from '../descriptors/data/372.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7023 as c1, d7024 as c2, d7025 as c3, d7026 as c4, d7027 as c5, d7028 as c6, d7029 as c7, d7030 as c8, d7031 as c9, d7032 as c10, d7033 as c11 } from '../descriptors/data/319.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7976 as d7976 } from '../descriptors/data/372.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7976;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["SharedCodec1268"]:c1(),["SharedCodec1269"]:c2(),["SharedCodec1270"]:c3(),["SharedCodec1271"]:c4(),["SharedCodec1272"]:c5(),["SharedCodec1273"]:c6(),["SharedCodec1274"]:c7(),["SharedCodec1275"]:c8(),["SharedCodec1276"]:c9(),["SharedCodec1277"]:c10(),["SharedCodec1278"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
