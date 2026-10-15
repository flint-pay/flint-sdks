import { d1703 as c0, d1698 as c1, d1697 as c2, d1699 as c3, d1700 as c4, d1701 as c5, d1702 as c6 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1703 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1703;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueRequest"]:c0(),["SharedCodec436"]:c1(),["SharedCodec437"]:c2(),["SharedCodec438"]:c3(),["SharedCodec439"]:c4(),["SharedCodec440"]:c5(),["SharedCodec441"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
