import { d1688 as c0, d1704 as c1, d1711 as c2, d1713 as c3, d323 as c4, d1820 as c5, d1821 as c6, d2162 as c7, d2163 as c8, d14 as c9, d1686 as c10, d1687 as c11, d1706 as c12, d1705 as c13, d1707 as c14, d1708 as c15, d1709 as c16, d1710 as c17, d1819 as c18 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1713 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1713;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["InvoicePaymentTerm"]:c1(),["InvoicePaymentTermCalculation"]:c2(),["InvoicePaymentTermResponse"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec433"]:c10(),["SharedCodec434"]:c11(),["SharedCodec441"]:c12(),["SharedCodec442"]:c13(),["SharedCodec443"]:c14(),["SharedCodec444"]:c15(),["SharedCodec445"]:c16(),["SharedCodec446"]:c17(),["SharedCodec466"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
