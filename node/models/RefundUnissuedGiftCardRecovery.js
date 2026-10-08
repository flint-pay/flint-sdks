import { d323 as c0, d2131 as c1 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2131 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2131;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RefundUnissuedGiftCardRecovery"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundUnissuedGiftCardRecovery(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
