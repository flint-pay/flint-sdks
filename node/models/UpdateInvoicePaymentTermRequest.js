import { d1688 as c0, d1711 as c1, d323 as c2, d1686 as c3, d1687 as c4, d1706 as c5, d1705 as c6, d1707 as c7, d1708 as c8, d1709 as c9, d1710 as c10, d2483 as c11, d2484 as c12 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2484 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2484;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["InvoicePaymentTermCalculation"]:c1(),["MoneyValue"]:c2(),["SharedCodec433"]:c3(),["SharedCodec434"]:c4(),["SharedCodec441"]:c5(),["SharedCodec442"]:c6(),["SharedCodec443"]:c7(),["SharedCodec444"]:c8(),["SharedCodec445"]:c9(),["SharedCodec446"]:c10(),["SharedCodec627"]:c11(),["UpdateInvoicePaymentTermRequest"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
