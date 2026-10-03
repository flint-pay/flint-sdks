import { d1667 as c0, d74 as c1 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1667 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1667;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceManualPaymentRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceManualPaymentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
