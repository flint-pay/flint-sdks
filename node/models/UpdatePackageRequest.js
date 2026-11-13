import { d5894 as c0 } from '../descriptors/data/264.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5978 as c1 } from '../descriptors/data/269.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7819 as c2, d7820 as c3, d7821 as c4, d7822 as c5 } from '../descriptors/data/373.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5659 as c6 } from '../descriptors/data/248.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5659 as d5659 } from '../descriptors/data/248.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5659;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1695"]:c0(),["SharedCodec1698"]:c1(),["SharedCodec1758"]:c2(),["SharedCodec1759"]:c3(),["SharedCodec1760"]:c4(),["SharedCodec1761"]:c5(),["UpdatePackageRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
