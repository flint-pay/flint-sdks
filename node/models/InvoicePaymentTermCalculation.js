import { d1713 as c0, d1708 as c1, d1707 as c2, d1709 as c3, d1710 as c4, d1711 as c5, d1712 as c6 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1713 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1713;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculation"]:c0(),["SharedCodec442"]:c1(),["SharedCodec443"]:c2(),["SharedCodec444"]:c3(),["SharedCodec445"]:c4(),["SharedCodec446"]:c5(),["SharedCodec447"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
