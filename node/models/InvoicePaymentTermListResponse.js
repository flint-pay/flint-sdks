import { d1643 as c0, d1659 as c1, d1666 as c2, d1667 as c3, d314 as c4, d1775 as c5, d1776 as c6, d2112 as c7, d2113 as c8, d14 as c9, d1641 as c10, d1642 as c11, d1661 as c12, d1660 as c13, d1662 as c14, d1663 as c15, d1664 as c16, d1665 as c17, d1774 as c18 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1667 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1667;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["InvoicePaymentTerm"]:c1(),["InvoicePaymentTermCalculation"]:c2(),["InvoicePaymentTermListResponse"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec415"]:c10(),["SharedCodec416"]:c11(),["SharedCodec423"]:c12(),["SharedCodec424"]:c13(),["SharedCodec425"]:c14(),["SharedCodec426"]:c15(),["SharedCodec427"]:c16(),["SharedCodec428"]:c17(),["SharedCodec448"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
