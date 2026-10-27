import { d406 as c0 } from '../descriptors/data/22.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3911 as c1 } from '../descriptors/data/165.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3917 as c2 } from '../descriptors/data/166.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d406 as d406 } from '../descriptors/data/22.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d406;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceImport"]:c0(),["SharedCodec124"]:c1(),["SharedCodec130"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceImport(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
