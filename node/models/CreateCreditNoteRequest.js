import { d247 as c0, d510 as c1, d512 as c2, d323 as c3, d508 as c4, d509 as c5 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d247 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d247;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCreditNoteRequest"]:c0(),["CreditNoteCorrectionRequest"]:c1(),["CreditNoteLineRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec177"]:c4(),["SharedCodec178"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCreditNoteRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
