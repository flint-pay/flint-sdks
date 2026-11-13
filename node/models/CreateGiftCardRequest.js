import { d261 as c0 } from '../descriptors/data/13.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6909 as c1 } from '../descriptors/data/322.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c2 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6862 as c3 } from '../descriptors/data/319.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6873 as c4, d6874 as c5, d6875 as c6, d6876 as c7, d6877 as c8, d6878 as c9, d6879 as c10, d6880 as c11, d6881 as c12, d6882 as c13, d6883 as c14, d6884 as c15 } from '../descriptors/data/320.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6885 as c16, d6886 as c17, d6887 as c18, d6888 as c19, d6889 as c20, d6890 as c21, d6891 as c22, d6892 as c23, d6893 as c24, d6894 as c25, d6895 as c26, d6896 as c27 } from '../descriptors/data/321.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6945 as c28, d6946 as c29 } from '../descriptors/data/323.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d261 as d261 } from '../descriptors/data/13.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d261;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRequest"]:c0(),["GiftCardNotificationRecipient"]:c1(),["MoneyValue"]:c2(),["SharedCodec141"]:c3(),["SharedCodec272"]:c4(),["SharedCodec273"]:c5(),["SharedCodec274"]:c6(),["SharedCodec275"]:c7(),["SharedCodec276"]:c8(),["SharedCodec277"]:c9(),["SharedCodec278"]:c10(),["SharedCodec279"]:c11(),["SharedCodec280"]:c12(),["SharedCodec281"]:c13(),["SharedCodec282"]:c14(),["SharedCodec283"]:c15(),["SharedCodec284"]:c16(),["SharedCodec285"]:c17(),["SharedCodec286"]:c18(),["SharedCodec287"]:c19(),["SharedCodec288"]:c20(),["SharedCodec289"]:c21(),["SharedCodec290"]:c22(),["SharedCodec291"]:c23(),["SharedCodec292"]:c24(),["SharedCodec293"]:c25(),["SharedCodec294"]:c26(),["SharedCodec295"]:c27(),["SharedCodec299"]:c28(),["SharedCodec300"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
