import { d1696 as c0, d1694 as c1, d1695 as c2 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1696 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1696;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleDue"]:c0(),["SharedCodec462"]:c1(),["SharedCodec463"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleDue(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
