import { d70 as c0, d501 as c1, d747 as c2, d323 as c3, d66 as c4, d69 as c5, d67 as c6, d68 as c7 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d70 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d70;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreditNote"]:c0(),["CreditNoteLine"]:c1(),["DocumentTaxID"]:c2(),["MoneyValue"]:c3(),["PostalAddress"]:c4(),["SharedCodec13"]:c5(),["SharedCodec14"]:c6(),["TaxIdentity"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreditNote(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
