import { d519 as c0, d528 as c1, d759 as c2, d74 as c3, d70 as c4, d73 as c5, d71 as c6, d72 as c7 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d519 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d519;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["DocumentTaxID"]:c2(),["MoneyValue"]:c3(),["PostalAddress"]:c4(),["SharedCodec17"]:c5(),["SharedCodec18"]:c6(),["TaxIdentity"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreditNote(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
