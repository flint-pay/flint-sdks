import { d278 as c0 } from '../descriptors/data/14.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c1 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d278 as d278 } from '../descriptors/data/14.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d278;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInvoiceManualPaymentRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInvoiceManualPaymentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
