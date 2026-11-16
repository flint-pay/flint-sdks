import { d6617 as c0 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1104 as c1 } from '../descriptors/data/54.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8566 as c2, d8567 as c3, d8568 as c4 } from '../descriptors/data/408.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1104 as d1104 } from '../descriptors/data/54.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1104;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PayOrderRequestResume"]:c1(),["SharedCodec1729"]:c2(),["SharedCodec1730"]:c3(),["SharedCodec1731"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestResume(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
