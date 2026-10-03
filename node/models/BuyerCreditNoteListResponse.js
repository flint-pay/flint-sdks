import { d75 as c0, d76 as c1, d526 as c2, d757 as c3, d74 as c4, d1784 as c5, d1783 as c6, d70 as c7, d2118 as c8, d2119 as c9, d73 as c10, d71 as c11, d72 as c12 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d76 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d76;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreditNote"]:c0(),["BuyerCreditNoteListResponse"]:c1(),["CreditNoteLine"]:c2(),["DocumentTaxID"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["PostalAddress"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SharedCodec17"]:c10(),["SharedCodec18"]:c11(),["TaxIdentity"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreditNoteListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
