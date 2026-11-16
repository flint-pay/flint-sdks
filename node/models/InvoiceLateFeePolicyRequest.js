import { d7974 as c0 } from '../descriptors/data/372.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c1 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7019 as c2 } from '../descriptors/data/318.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7020 as c3, d7021 as c4, d7022 as c5 } from '../descriptors/data/319.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7974 as d7974 } from '../descriptors/data/372.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7974;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicyRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec101"]:c2(),["SharedCodec102"]:c3(),["SharedCodec103"]:c4(),["SharedCodec104"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceLateFeePolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
