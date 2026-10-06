import { d522 as c0, d531 as c1, d533 as c2, d765 as c3, d77 as c4, d1797 as c5, d1796 as c6, d73 as c7, d2131 as c8, d2132 as c9, d14 as c10, d76 as c11, d74 as c12, d1795 as c13, d75 as c14 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d533 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d533;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["CreditNoteListResponse"]:c2(),["DocumentTaxID"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["PostalAddress"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SharedCodec1"]:c10(),["SharedCodec18"]:c11(),["SharedCodec19"]:c12(),["SharedCodec485"]:c13(),["TaxIdentity"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreditNoteListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
