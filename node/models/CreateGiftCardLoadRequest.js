import { d293 as c0 } from '../descriptors/data/15.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7885 as c1 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8994 as c2 } from '../descriptors/data/402.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9009 as c3, d9010 as c4, d9011 as c5, d9012 as c6, d9013 as c7, d9014 as c8, d9015 as c9, d9016 as c10, d9017 as c11, d9018 as c12, d9019 as c13, d9020 as c14, d9021 as c15, d9022 as c16, d9023 as c17, d9024 as c18, d9025 as c19, d9026 as c20, d9027 as c21, d9028 as c22 } from '../descriptors/data/403.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9029 as c23, d9030 as c24, d9031 as c25, d9032 as c26 } from '../descriptors/data/404.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d293 as d293 } from '../descriptors/data/15.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d293;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardLoadRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec216"]:c2(),["SharedCodec418"]:c3(),["SharedCodec419"]:c4(),["SharedCodec420"]:c5(),["SharedCodec421"]:c6(),["SharedCodec422"]:c7(),["SharedCodec423"]:c8(),["SharedCodec424"]:c9(),["SharedCodec425"]:c10(),["SharedCodec426"]:c11(),["SharedCodec427"]:c12(),["SharedCodec428"]:c13(),["SharedCodec429"]:c14(),["SharedCodec430"]:c15(),["SharedCodec431"]:c16(),["SharedCodec432"]:c17(),["SharedCodec433"]:c18(),["SharedCodec434"]:c19(),["SharedCodec435"]:c20(),["SharedCodec436"]:c21(),["SharedCodec437"]:c22(),["SharedCodec438"]:c23(),["SharedCodec439"]:c24(),["SharedCodec440"]:c25(),["SharedCodec441"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardLoadRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
