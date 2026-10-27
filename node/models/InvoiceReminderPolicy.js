import { d5075 as c0, d5076 as c1 } from '../descriptors/data/232.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d5075 as d5075 } from '../descriptors/data/232.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5075;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceReminderPolicy"]:c0(),["InvoiceReminderRule"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceReminderPolicy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
