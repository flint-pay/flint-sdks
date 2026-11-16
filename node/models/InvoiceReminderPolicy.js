import { d9484 as c0, d9485 as c1 } from '../descriptors/data/462.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9484 as d9484 } from '../descriptors/data/462.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9484;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceReminderPolicy"]:c0(),["InvoiceReminderRule"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceReminderPolicy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
