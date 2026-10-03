import { d525 as c0, d527 as c1, d74 as c2, d523 as c3, d524 as c4, d2361 as c5, d2362 as c6 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2362 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2362;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteCorrectionRequest"]:c0(),["CreditNoteLineRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec198"]:c3(),["SharedCodec199"]:c4(),["SharedCodec612"]:c5(),["UpdateCreditNoteRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCreditNoteRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
