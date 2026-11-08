import { d6914 as c0, d6915 as c1 } from '../descriptors/data/328.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6914 as d6914 } from '../descriptors/data/328.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6914;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceReminderPolicy"]:c0(),["InvoiceReminderRule"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceReminderPolicy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
