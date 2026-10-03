import { d375 as c0, d1662 as c1, d1680 as c2, d74 as c3, d1660 as c4, d1661 as c5, d1672 as c6, d1671 as c7, d1673 as c8, d1674 as c9, d1675 as c10, d1676 as c11 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d375 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d375;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInvoicePaymentTermRequest"]:c0(),["InvoiceLateFeePolicy"]:c1(),["InvoicePaymentTermCalculation"]:c2(),["MoneyValue"]:c3(),["SharedCodec448"]:c4(),["SharedCodec449"]:c5(),["SharedCodec451"]:c6(),["SharedCodec452"]:c7(),["SharedCodec453"]:c8(),["SharedCodec454"]:c9(),["SharedCodec455"]:c10(),["SharedCodec456"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
