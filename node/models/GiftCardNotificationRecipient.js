import { d7779 as c0 } from '../descriptors/data/363.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7391 as c1 } from '../descriptors/data/339.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7779 as d7779 } from '../descriptors/data/363.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7779;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotificationRecipient"]:c0(),["GiftCardPurchaseRecipientRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardNotificationRecipient(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
