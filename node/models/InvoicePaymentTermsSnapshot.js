import { d1643 as c0, d1666 as c1, d1669 as c2, d314 as c3, d1641 as c4, d1642 as c5, d1661 as c6, d1660 as c7, d1662 as c8, d1663 as c9, d1664 as c10, d1665 as c11 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1669 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1669;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["InvoicePaymentTermCalculation"]:c1(),["InvoicePaymentTermsSnapshot"]:c2(),["MoneyValue"]:c3(),["SharedCodec415"]:c4(),["SharedCodec416"]:c5(),["SharedCodec423"]:c6(),["SharedCodec424"]:c7(),["SharedCodec425"]:c8(),["SharedCodec426"]:c9(),["SharedCodec427"]:c10(),["SharedCodec428"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermsSnapshot(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
