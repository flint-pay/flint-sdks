import { d5604 as c0 } from '../descriptors/data/252.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5658 as c1, d5659 as c2, d5660 as c3, d5661 as c4, d5662 as c5 } from '../descriptors/data/255.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5604 as d5604 } from '../descriptors/data/252.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5604;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleDueWrite"]:c0(),["SharedCodec817"]:c1(),["SharedCodec818"]:c2(),["SharedCodec819"]:c3(),["SharedCodec820"]:c4(),["SharedCodec821"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleDueWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
