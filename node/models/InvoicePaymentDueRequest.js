import { d1701 as c0, d1696 as c1, d1695 as c2, d1697 as c3, d1698 as c4, d1699 as c5, d1700 as c6 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1701 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1701;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueRequest"]:c0(),["SharedCodec435"]:c1(),["SharedCodec436"]:c2(),["SharedCodec437"]:c3(),["SharedCodec438"]:c4(),["SharedCodec439"]:c5(),["SharedCodec440"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
