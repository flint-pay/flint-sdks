import { d839 as c0 } from '../descriptors/data/40.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4743 as c1, d4744 as c2 } from '../descriptors/data/206.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d839 as d839 } from '../descriptors/data/40.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d839;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationOnReceipt"]:c0(),["SharedCodec791"]:c1(),["SharedCodec792"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationOnReceipt(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
