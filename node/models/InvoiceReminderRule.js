import { d6856 as c0 } from '../descriptors/data/325.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6856 as d6856 } from '../descriptors/data/325.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6856;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceReminderRule"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceReminderRule(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
