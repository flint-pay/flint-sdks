import { d299 as c0 } from '../descriptors/data/15.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9042 as c1, d9029 as c24, d9030 as c25, d9031 as c26, d9032 as c27 } from '../descriptors/data/404.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7885 as c2 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8994 as c3 } from '../descriptors/data/402.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9009 as c4, d9010 as c5, d9011 as c6, d9012 as c7, d9013 as c8, d9014 as c9, d9015 as c10, d9016 as c11, d9017 as c12, d9018 as c13, d9019 as c14, d9020 as c15, d9021 as c16, d9022 as c17, d9023 as c18, d9024 as c19, d9025 as c20, d9026 as c21, d9027 as c22, d9028 as c23 } from '../descriptors/data/403.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9078 as c28, d9079 as c29 } from '../descriptors/data/406.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d299 as d299 } from '../descriptors/data/15.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d299;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRequest"]:c0(),["GiftCardNotificationRecipient"]:c1(),["MoneyValue"]:c2(),["SharedCodec216"]:c3(),["SharedCodec418"]:c4(),["SharedCodec419"]:c5(),["SharedCodec420"]:c6(),["SharedCodec421"]:c7(),["SharedCodec422"]:c8(),["SharedCodec423"]:c9(),["SharedCodec424"]:c10(),["SharedCodec425"]:c11(),["SharedCodec426"]:c12(),["SharedCodec427"]:c13(),["SharedCodec428"]:c14(),["SharedCodec429"]:c15(),["SharedCodec430"]:c16(),["SharedCodec431"]:c17(),["SharedCodec432"]:c18(),["SharedCodec433"]:c19(),["SharedCodec434"]:c20(),["SharedCodec435"]:c21(),["SharedCodec436"]:c22(),["SharedCodec437"]:c23(),["SharedCodec438"]:c24(),["SharedCodec439"]:c25(),["SharedCodec440"]:c26(),["SharedCodec441"]:c27(),["SharedCodec445"]:c28(),["SharedCodec446"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
