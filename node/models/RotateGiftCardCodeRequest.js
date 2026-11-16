import { d7779 as c0 } from '../descriptors/data/363.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1429 as c1 } from '../descriptors/data/68.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1429 as d1429 } from '../descriptors/data/68.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1429;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotificationRecipient"]:c0(),["RotateGiftCardCodeRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRotateGiftCardCodeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
