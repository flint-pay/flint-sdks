import { d8241 as c0, d8243 as c1 } from '../descriptors/data/360.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c2 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8358 as c3, d8350 as c4, d8351 as c5, d8352 as c6, d8353 as c7 } from '../descriptors/data/366.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7729 as c8 } from '../descriptors/data/324.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7729 as d7729 } from '../descriptors/data/324.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7729;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteCorrectionRequestModel"]:c0(),["CreditNoteLineItemRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec3075"]:c3(),["SharedCodec608"]:c4(),["SharedCodec609"]:c5(),["SharedCodec610"]:c6(),["SharedCodec611"]:c7(),["UpdateCreditNoteRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCreditNoteRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
