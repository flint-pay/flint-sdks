import { d492 as c0, d501 as c1, d503 as c2, d747 as c3, d323 as c4, d1820 as c5, d1821 as c6, d66 as c7, d2162 as c8, d2163 as c9, d14 as c10, d69 as c11, d67 as c12, d1819 as c13, d68 as c14 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d503 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d503;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["CreditNoteListResponse"]:c2(),["DocumentTaxID"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["PostalAddress"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SharedCodec1"]:c10(),["SharedCodec13"]:c11(),["SharedCodec14"]:c12(),["SharedCodec466"]:c13(),["TaxIdentity"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreditNoteListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
