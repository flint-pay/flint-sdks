import { d384 as c0, d1671 as c1, d1672 as c2, d74 as c3, d380 as c4, d379 as c5, d381 as c6, d382 as c7, d383 as c8 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d384 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d384;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceCollectionRequest"]:c0(),["InvoicePaymentOptionLimit"]:c1(),["InvoicePaymentPolicy"]:c2(),["MoneyValue"]:c3(),["SharedCodec131"]:c4(),["SharedCodec132"]:c5(),["SharedCodec133"]:c6(),["SharedCodec134"]:c7(),["SharedCodec135"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceCollectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
