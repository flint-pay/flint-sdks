import { d355 as c0, d1688 as c1, d1711 as c2, d323 as c3, d1686 as c4, d1687 as c5, d1706 as c6, d1705 as c7, d1707 as c8, d1708 as c9, d1709 as c10, d1710 as c11 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d355 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d355;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInvoicePaymentTermRequest"]:c0(),["InvoiceLateFeePolicy"]:c1(),["InvoicePaymentTermCalculation"]:c2(),["MoneyValue"]:c3(),["SharedCodec433"]:c4(),["SharedCodec434"]:c5(),["SharedCodec441"]:c6(),["SharedCodec442"]:c7(),["SharedCodec443"]:c8(),["SharedCodec444"]:c9(),["SharedCodec445"]:c10(),["SharedCodec446"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
