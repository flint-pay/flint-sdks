import { d1643 as c0, d1666 as c1, d314 as c2, d1641 as c3, d1642 as c4, d1661 as c5, d1660 as c6, d1662 as c7, d1663 as c8, d1664 as c9, d1665 as c10, d2399 as c11, d2400 as c12 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2400 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2400;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["InvoicePaymentTermCalculation"]:c1(),["MoneyValue"]:c2(),["SharedCodec415"]:c3(),["SharedCodec416"]:c4(),["SharedCodec423"]:c5(),["SharedCodec424"]:c6(),["SharedCodec425"]:c7(),["SharedCodec426"]:c8(),["SharedCodec427"]:c9(),["SharedCodec428"]:c10(),["SharedCodec602"]:c11(),["UpdateInvoicePaymentTermRequest"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
