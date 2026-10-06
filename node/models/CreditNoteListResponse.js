import { d527 as c0, d536 as c1, d538 as c2, d774 as c3, d77 as c4, d1823 as c5, d1822 as c6, d73 as c7, d2157 as c8, d2158 as c9, d14 as c10, d76 as c11, d74 as c12, d1821 as c13, d75 as c14 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d538 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d538;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["CreditNoteListResponse"]:c2(),["DocumentTaxID"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["PostalAddress"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SharedCodec1"]:c10(),["SharedCodec18"]:c11(),["SharedCodec19"]:c12(),["SharedCodec487"]:c13(),["TaxIdentity"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreditNoteListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
