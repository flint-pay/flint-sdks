import { d6969 as c0, d6971 as c1 } from '../descriptors/data/316.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c2 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7085 as c3, d7078 as c4, d7079 as c5, d7080 as c6, d7081 as c7 } from '../descriptors/data/322.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6466 as c8 } from '../descriptors/data/281.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6466 as d6466 } from '../descriptors/data/281.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6466;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteCorrectionRequestModel"]:c0(),["CreditNoteLineItemRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec2410"]:c3(),["SharedCodec545"]:c4(),["SharedCodec546"]:c5(),["SharedCodec547"]:c6(),["SharedCodec548"]:c7(),["UpdateCreditNoteRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCreditNoteRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
