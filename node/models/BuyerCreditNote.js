import { d75 as c0, d526 as c1, d757 as c2, d74 as c3, d70 as c4, d73 as c5, d71 as c6, d72 as c7 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d75 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d75;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreditNote"]:c0(),["CreditNoteLine"]:c1(),["DocumentTaxID"]:c2(),["MoneyValue"]:c3(),["PostalAddress"]:c4(),["SharedCodec17"]:c5(),["SharedCodec18"]:c6(),["TaxIdentity"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreditNote(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
