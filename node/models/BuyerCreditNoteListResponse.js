import { d75 as c0, d76 as c1, d528 as c2, d759 as c3, d74 as c4, d1786 as c5, d1785 as c6, d70 as c7, d2121 as c8, d2122 as c9, d73 as c10, d71 as c11, d72 as c12 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d76 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d76;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreditNote"]:c0(),["BuyerCreditNoteListResponse"]:c1(),["CreditNoteLine"]:c2(),["DocumentTaxID"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["PostalAddress"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SharedCodec17"]:c10(),["SharedCodec18"]:c11(),["TaxIdentity"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreditNoteListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
