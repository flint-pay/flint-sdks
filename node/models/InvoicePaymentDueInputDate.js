import { d829 as c0 } from '../descriptors/data/39.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4768 as c1 } from '../descriptors/data/208.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d829 as d829 } from '../descriptors/data/39.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d829;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueInputDate"]:c0(),["SharedCodec780"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueInputDate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
