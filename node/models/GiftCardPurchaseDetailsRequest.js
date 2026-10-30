import { d5033 as c0, d5034 as c1 } from '../descriptors/data/223.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4547 as c2 } from '../descriptors/data/195.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5033 as d5033 } from '../descriptors/data/223.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5033;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardPurchaseDetailsRequest"]:c0(),["GiftCardPurchaseRecipientRequest"]:c1(),["SharedCodec602"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardPurchaseDetailsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
