import { d696 as c0 } from '../descriptors/data/38.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6877 as c1, d6878 as c2, d6879 as c3, d6880 as c4, d6881 as c5, d6882 as c6, d6883 as c7, d6884 as c8 } from '../descriptors/data/320.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6885 as c9, d6886 as c10, d6887 as c11, d6888 as c12, d6889 as c13, d6890 as c14, d6891 as c15, d6892 as c16, d6893 as c17 } from '../descriptors/data/321.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d696 as d696 } from '../descriptors/data/38.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d696;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceRequest"]:c0(),["SharedCodec276"]:c1(),["SharedCodec277"]:c2(),["SharedCodec278"]:c3(),["SharedCodec279"]:c4(),["SharedCodec280"]:c5(),["SharedCodec281"]:c6(),["SharedCodec282"]:c7(),["SharedCodec283"]:c8(),["SharedCodec284"]:c9(),["SharedCodec285"]:c10(),["SharedCodec286"]:c11(),["SharedCodec287"]:c12(),["SharedCodec288"]:c13(),["SharedCodec289"]:c14(),["SharedCodec290"]:c15(),["SharedCodec291"]:c16(),["SharedCodec292"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
