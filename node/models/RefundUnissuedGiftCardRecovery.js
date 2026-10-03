import { d2089 as c0, d38 as c1 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2089 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2089;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RefundUnissuedGiftCardRecovery"]:c0(),["SharedCodec5"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundUnissuedGiftCardRecovery(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
