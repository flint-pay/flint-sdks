import { d837 as c0 } from '../descriptors/data/39.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4748 as c1 } from '../descriptors/data/207.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d837 as d837 } from '../descriptors/data/39.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d837;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationDaysAfterMonthEnd"]:c0(),["SharedCodec796"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationDaysAfterMonthEnd(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
