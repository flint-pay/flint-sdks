import { d843 as c0 } from '../descriptors/data/43.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c1 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7020 as c2 } from '../descriptors/data/319.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d843 as d843 } from '../descriptors/data/43.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d843;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicyFixedRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec102"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceLateFeePolicyFixedRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
