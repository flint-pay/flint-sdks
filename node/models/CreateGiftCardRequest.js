import { d299 as c0 } from '../descriptors/data/15.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9043 as c1, d9030 as c24, d9031 as c25, d9032 as c26, d9033 as c27 } from '../descriptors/data/405.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c2 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8995 as c3 } from '../descriptors/data/403.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9010 as c4, d9011 as c5, d9012 as c6, d9013 as c7, d9014 as c8, d9015 as c9, d9016 as c10, d9017 as c11, d9018 as c12, d9019 as c13, d9020 as c14, d9021 as c15, d9022 as c16, d9023 as c17, d9024 as c18, d9025 as c19, d9026 as c20, d9027 as c21, d9028 as c22, d9029 as c23 } from '../descriptors/data/404.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9079 as c28, d9080 as c29 } from '../descriptors/data/407.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d299 as d299 } from '../descriptors/data/15.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d299;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRequest"]:c0(),["GiftCardNotificationRecipient"]:c1(),["MoneyValue"]:c2(),["SharedCodec216"]:c3(),["SharedCodec419"]:c4(),["SharedCodec420"]:c5(),["SharedCodec421"]:c6(),["SharedCodec422"]:c7(),["SharedCodec423"]:c8(),["SharedCodec424"]:c9(),["SharedCodec425"]:c10(),["SharedCodec426"]:c11(),["SharedCodec427"]:c12(),["SharedCodec428"]:c13(),["SharedCodec429"]:c14(),["SharedCodec430"]:c15(),["SharedCodec431"]:c16(),["SharedCodec432"]:c17(),["SharedCodec433"]:c18(),["SharedCodec434"]:c19(),["SharedCodec435"]:c20(),["SharedCodec436"]:c21(),["SharedCodec437"]:c22(),["SharedCodec438"]:c23(),["SharedCodec439"]:c24(),["SharedCodec440"]:c25(),["SharedCodec441"]:c26(),["SharedCodec442"]:c27(),["SharedCodec446"]:c28(),["SharedCodec447"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
