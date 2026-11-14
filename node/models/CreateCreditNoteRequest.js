import { d219 as c0 } from '../descriptors/data/10.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6141 as c1, d6143 as c2 } from '../descriptors/data/278.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c3 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6248 as c4, d6249 as c5, d6250 as c6, d6251 as c7 } from '../descriptors/data/284.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d219 as d219 } from '../descriptors/data/10.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d219;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCreditNoteRequest"]:c0(),["CreditNoteCorrectionRequestModel"]:c1(),["CreditNoteLineItemRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec454"]:c4(),["SharedCodec455"]:c5(),["SharedCodec456"]:c6(),["SharedCodec457"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCreditNoteRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
