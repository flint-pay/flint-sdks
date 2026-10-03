import { d517 as c0, d526 as c1, d531 as c2, d757 as c3, d74 as c4, d1784 as c5, d1783 as c6, d70 as c7, d2118 as c8, d2119 as c9, d73 as c10, d71 as c11, d72 as c12 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d531 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d531;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["CreditNoteResponse"]:c2(),["DocumentTaxID"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["PostalAddress"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SharedCodec17"]:c10(),["SharedCodec18"]:c11(),["TaxIdentity"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreditNoteResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
