import { d836 as c0 } from '../descriptors/data/39.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4752 as c1 } from '../descriptors/data/207.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d836 as d836 } from '../descriptors/data/39.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d836;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationDayOfNextMonth"]:c0(),["SharedCodec800"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationDayOfNextMonth(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
