import { d400 as c0, d395 as c1, d394 as c2, d396 as c3, d397 as c4, d398 as c5, d399 as c6 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d400 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d400;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueRequest"]:c0(),["SharedCodec139"]:c1(),["SharedCodec140"]:c2(),["SharedCodec141"]:c3(),["SharedCodec142"]:c4(),["SharedCodec143"]:c5(),["SharedCodec144"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
