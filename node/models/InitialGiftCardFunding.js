import { d729 as c0 } from '../descriptors/data/39.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c1 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6862 as c2 } from '../descriptors/data/319.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6873 as c3, d6874 as c4, d6875 as c5, d6876 as c6, d6877 as c7, d6878 as c8, d6879 as c9, d6880 as c10, d6881 as c11, d6882 as c12, d6883 as c13, d6884 as c14 } from '../descriptors/data/320.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6885 as c15, d6886 as c16, d6887 as c17, d6888 as c18, d6889 as c19, d6890 as c20, d6891 as c21, d6892 as c22, d6893 as c23, d6894 as c24, d6895 as c25, d6896 as c26 } from '../descriptors/data/321.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d729 as d729 } from '../descriptors/data/39.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d729;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InitialGiftCardFunding"]:c0(),["MoneyValue"]:c1(),["SharedCodec141"]:c2(),["SharedCodec272"]:c3(),["SharedCodec273"]:c4(),["SharedCodec274"]:c5(),["SharedCodec275"]:c6(),["SharedCodec276"]:c7(),["SharedCodec277"]:c8(),["SharedCodec278"]:c9(),["SharedCodec279"]:c10(),["SharedCodec280"]:c11(),["SharedCodec281"]:c12(),["SharedCodec282"]:c13(),["SharedCodec283"]:c14(),["SharedCodec284"]:c15(),["SharedCodec285"]:c16(),["SharedCodec286"]:c17(),["SharedCodec287"]:c18(),["SharedCodec288"]:c19(),["SharedCodec289"]:c20(),["SharedCodec290"]:c21(),["SharedCodec291"]:c22(),["SharedCodec292"]:c23(),["SharedCodec293"]:c24(),["SharedCodec294"]:c25(),["SharedCodec295"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInitialGiftCardFunding(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
