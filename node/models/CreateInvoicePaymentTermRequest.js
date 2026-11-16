import { d279 as c0 } from '../descriptors/data/14.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7974 as c1, d7976 as c2 } from '../descriptors/data/372.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c3 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7019 as c4 } from '../descriptors/data/318.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7020 as c5, d7021 as c6, d7022 as c7, d7023 as c8, d7024 as c9, d7025 as c10, d7026 as c11, d7027 as c12, d7028 as c13, d7029 as c14, d7030 as c15, d7031 as c16, d7032 as c17, d7033 as c18 } from '../descriptors/data/319.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d279 as d279 } from '../descriptors/data/14.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d279;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInvoicePaymentTermRequest"]:c0(),["InvoiceLateFeePolicyRequest"]:c1(),["InvoicePaymentTermCalculationRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec101"]:c4(),["SharedCodec102"]:c5(),["SharedCodec103"]:c6(),["SharedCodec104"]:c7(),["SharedCodec1268"]:c8(),["SharedCodec1269"]:c9(),["SharedCodec1270"]:c10(),["SharedCodec1271"]:c11(),["SharedCodec1272"]:c12(),["SharedCodec1273"]:c13(),["SharedCodec1274"]:c14(),["SharedCodec1275"]:c15(),["SharedCodec1276"]:c16(),["SharedCodec1277"]:c17(),["SharedCodec1278"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
