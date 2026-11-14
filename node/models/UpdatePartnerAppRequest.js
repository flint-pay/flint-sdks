import { d5790 as c0 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7868 as c1 } from '../descriptors/data/380.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7892 as c2, d7893 as c3, d7894 as c4, d7895 as c5, d7896 as c6, d7897 as c7, d7898 as c8, d7899 as c9, d7900 as c10, d7901 as c11, d7902 as c12, d7903 as c13 } from '../descriptors/data/381.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5673 as c14 } from '../descriptors/data/249.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5673 as d5673 } from '../descriptors/data/249.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5673;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PartnerAppPermissionManifestEntryRequest"]:c1(),["SharedCodec1759"]:c2(),["SharedCodec1760"]:c3(),["SharedCodec1761"]:c4(),["SharedCodec1762"]:c5(),["SharedCodec1763"]:c6(),["SharedCodec1764"]:c7(),["SharedCodec1765"]:c8(),["SharedCodec1766"]:c9(),["SharedCodec1767"]:c10(),["SharedCodec1768"]:c11(),["SharedCodec1769"]:c12(),["SharedCodec1770"]:c13(),["UpdatePartnerAppRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePartnerAppRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
