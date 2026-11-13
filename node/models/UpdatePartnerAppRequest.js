import { d5764 as c0 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7847 as c1 } from '../descriptors/data/375.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7871 as c2, d7872 as c3, d7873 as c4, d7874 as c5, d7875 as c6, d7876 as c7, d7877 as c8, d7878 as c9, d7879 as c10, d7880 as c11, d7881 as c12, d7882 as c13 } from '../descriptors/data/376.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5660 as c14 } from '../descriptors/data/248.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5660 as d5660 } from '../descriptors/data/248.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5660;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PartnerAppPermissionManifestEntryRequest"]:c1(),["SharedCodec1762"]:c2(),["SharedCodec1763"]:c3(),["SharedCodec1764"]:c4(),["SharedCodec1765"]:c5(),["SharedCodec1766"]:c6(),["SharedCodec1767"]:c7(),["SharedCodec1768"]:c8(),["SharedCodec1769"]:c9(),["SharedCodec1770"]:c10(),["SharedCodec1771"]:c11(),["SharedCodec1772"]:c12(),["SharedCodec1773"]:c13(),["UpdatePartnerAppRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePartnerAppRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
