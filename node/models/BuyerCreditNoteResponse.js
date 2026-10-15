import { d70 as c0, d72 as c1, d511 as c2, d757 as c3, d323 as c4, d1823 as c5, d1824 as c6, d66 as c7, d2178 as c8, d2179 as c9, d14 as c10, d69 as c11, d67 as c12, d1822 as c13, d68 as c14 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d72 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d72;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreditNote"]:c0(),["BuyerCreditNoteResponse"]:c1(),["CreditNoteLine"]:c2(),["DocumentTaxID"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["PostalAddress"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SharedCodec1"]:c10(),["SharedCodec13"]:c11(),["SharedCodec14"]:c12(),["SharedCodec467"]:c13(),["TaxIdentity"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreditNoteResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
