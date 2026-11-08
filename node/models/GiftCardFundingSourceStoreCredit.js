import { d640 as c0 } from '../descriptors/data/33.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5353 as c1 } from '../descriptors/data/240.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d640 as d640 } from '../descriptors/data/33.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d640;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceStoreCredit"]:c0(),["SharedCodec220"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceStoreCredit(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
