import { d527 as c0, d529 as c1, d74 as c2, d525 as c3, d526 as c4, d2364 as c5, d2365 as c6 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2365 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2365;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteCorrectionRequest"]:c0(),["CreditNoteLineRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec198"]:c3(),["SharedCodec199"]:c4(),["SharedCodec612"]:c5(),["UpdateCreditNoteRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCreditNoteRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
