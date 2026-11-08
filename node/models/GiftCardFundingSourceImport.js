import { d639 as c0 } from '../descriptors/data/33.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5339 as c1, d5345 as c2 } from '../descriptors/data/239.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d639 as d639 } from '../descriptors/data/33.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d639;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceImport"]:c0(),["SharedCodec206"]:c1(),["SharedCodec212"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceImport(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
