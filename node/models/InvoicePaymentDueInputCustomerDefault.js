import { d880 as c0 } from '../descriptors/data/44.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7048 as c1 } from '../descriptors/data/320.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8007 as c2 } from '../descriptors/data/374.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d880 as d880 } from '../descriptors/data/44.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d880;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueInputCustomerDefault"]:c0(),["SharedCodec1167"]:c1(),["SharedCodec1261"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueInputCustomerDefault(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
