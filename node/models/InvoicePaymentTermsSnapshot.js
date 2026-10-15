import { d1690 as c0, d1713 as c1, d1716 as c2, d323 as c3, d1688 as c4, d1689 as c5, d1708 as c6, d1707 as c7, d1709 as c8, d1710 as c9, d1711 as c10, d1712 as c11 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1716 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1716;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["InvoicePaymentTermCalculation"]:c1(),["InvoicePaymentTermsSnapshot"]:c2(),["MoneyValue"]:c3(),["SharedCodec434"]:c4(),["SharedCodec435"]:c5(),["SharedCodec442"]:c6(),["SharedCodec443"]:c7(),["SharedCodec444"]:c8(),["SharedCodec445"]:c9(),["SharedCodec446"]:c10(),["SharedCodec447"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermsSnapshot(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
