import { d342 as c0, d344 as c1 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d342 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d342;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardAdjustmentRequest"]:c0(),["GiftCardMoney"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardAdjustmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
