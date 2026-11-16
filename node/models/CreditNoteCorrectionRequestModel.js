import { d6969 as c0 } from '../descriptors/data/316.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c1 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7078 as c2, d7079 as c3, d7080 as c4, d7081 as c5 } from '../descriptors/data/322.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6969 as d6969 } from '../descriptors/data/316.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6969;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteCorrectionRequestModel"]:c0(),["MoneyValue"]:c1(),["SharedCodec545"]:c2(),["SharedCodec546"]:c3(),["SharedCodec547"]:c4(),["SharedCodec548"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreditNoteCorrectionRequestModel(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
