import { d160 as c0 } from '../descriptors/data/8.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3955 as c1 } from '../descriptors/data/167.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d160 as d160 } from '../descriptors/data/8.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d160;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardNotificationRequest"]:c0(),["GiftCardNotificationRecipient"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardNotificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
