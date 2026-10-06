import { d276 as c0, d535 as c1, d537 as c2, d77 as c3, d533 as c4, d534 as c5 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d276 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d276;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCreditNoteRequest"]:c0(),["CreditNoteCorrectionRequest"]:c1(),["CreditNoteLineRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec200"]:c4(),["SharedCodec201"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCreditNoteRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
