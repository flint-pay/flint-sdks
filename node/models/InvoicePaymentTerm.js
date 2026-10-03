import { d1679 as c0, d74 as c1, d1660 as c2, d1661 as c3, d1677 as c4, d1672 as c5, d1671 as c6, d1673 as c7, d1674 as c8, d1675 as c9, d1676 as c10, d1678 as c11 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1679 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1679;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTerm"]:c0(),["MoneyValue"]:c1(),["SharedCodec448"]:c2(),["SharedCodec449"]:c3(),["SharedCodec450"]:c4(),["SharedCodec451"]:c5(),["SharedCodec452"]:c6(),["SharedCodec453"]:c7(),["SharedCodec454"]:c8(),["SharedCodec455"]:c9(),["SharedCodec456"]:c10(),["SharedCodec457"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTerm(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
