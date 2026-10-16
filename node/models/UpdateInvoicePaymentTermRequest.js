import { d1690 as c0, d1713 as c1, d323 as c2, d1688 as c3, d1689 as c4, d1708 as c5, d1707 as c6, d1709 as c7, d1710 as c8, d1711 as c9, d1712 as c10, d2499 as c11, d2500 as c12 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2500 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2500;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["InvoicePaymentTermCalculation"]:c1(),["MoneyValue"]:c2(),["SharedCodec434"]:c3(),["SharedCodec435"]:c4(),["SharedCodec442"]:c5(),["SharedCodec443"]:c6(),["SharedCodec444"]:c7(),["SharedCodec445"]:c8(),["SharedCodec446"]:c9(),["SharedCodec447"]:c10(),["SharedCodec632"]:c11(),["UpdateInvoicePaymentTermRequest"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
