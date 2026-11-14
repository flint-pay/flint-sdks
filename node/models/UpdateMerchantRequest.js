import { d6021 as c0, d6019 as c3, d6020 as c4, d6018 as c6 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5929 as c1, d5930 as c2, d5920 as c5 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7568 as c7, d7569 as c8 } from '../descriptors/data/363.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5666 as c9 } from '../descriptors/data/249.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5666 as d5666 } from '../descriptors/data/249.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5666;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["ImageInputFile"]:c1(),["ImageInputSourceURL"]:c2(),["SharedCodec0"]:c3(),["SharedCodec1"]:c4(),["SharedCodec1692"]:c5(),["SharedCodec1695"]:c6(),["SharedCodec1742"]:c7(),["SharedCodec1743"]:c8(),["UpdateMerchantRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateMerchantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
