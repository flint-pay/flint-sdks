import { d828 as c0 } from '../descriptors/data/39.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4766 as c1 } from '../descriptors/data/208.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5651 as c2 } from '../descriptors/data/254.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d828 as d828 } from '../descriptors/data/39.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d828;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueInputCustomerDefault"]:c0(),["SharedCodec778"]:c1(),["SharedCodec783"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueInputCustomerDefault(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
