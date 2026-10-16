import { d502 as c0, d511 as c1, d513 as c2, d757 as c3, d323 as c4, d1823 as c5, d1824 as c6, d66 as c7, d2178 as c8, d2179 as c9, d14 as c10, d69 as c11, d67 as c12, d1822 as c13, d68 as c14 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d513 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d513;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["CreditNoteListResponse"]:c2(),["DocumentTaxID"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["PostalAddress"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SharedCodec1"]:c10(),["SharedCodec13"]:c11(),["SharedCodec14"]:c12(),["SharedCodec467"]:c13(),["TaxIdentity"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreditNoteListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
