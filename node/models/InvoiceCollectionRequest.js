import { d7987 as c0, d7993 as c2 } from '../descriptors/data/373.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8096 as c1 } from '../descriptors/data/378.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c3 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7044 as c4, d7045 as c5 } from '../descriptors/data/320.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7998 as c6, d7999 as c7, d8000 as c8, d8001 as c9, d8002 as c10, d8003 as c11, d8004 as c12 } from '../descriptors/data/374.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7987 as d7987 } from '../descriptors/data/373.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7987;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceCollectionRequest"]:c0(),["InvoicePaymentOptionLimitRequest"]:c1(),["InvoicePaymentPolicyRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec1152"]:c4(),["SharedCodec1153"]:c5(),["SharedCodec1188"]:c6(),["SharedCodec1189"]:c7(),["SharedCodec1190"]:c8(),["SharedCodec1191"]:c9(),["SharedCodec1192"]:c10(),["SharedCodec1193"]:c11(),["SharedCodec1194"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceCollectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
