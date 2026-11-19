import { d923 as c0 } from '../descriptors/data/50.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c1 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8995 as c2 } from '../descriptors/data/403.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9010 as c3, d9011 as c4, d9012 as c5, d9013 as c6, d9014 as c7, d9015 as c8, d9016 as c9, d9017 as c10, d9018 as c11, d9019 as c12, d9020 as c13, d9021 as c14, d9022 as c15, d9023 as c16, d9024 as c17, d9025 as c18, d9026 as c19, d9027 as c20, d9028 as c21, d9029 as c22 } from '../descriptors/data/404.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9030 as c23, d9031 as c24, d9032 as c25, d9033 as c26 } from '../descriptors/data/405.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d923 as d923 } from '../descriptors/data/50.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d923;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InitialGiftCardFunding"]:c0(),["MoneyValue"]:c1(),["SharedCodec216"]:c2(),["SharedCodec419"]:c3(),["SharedCodec420"]:c4(),["SharedCodec421"]:c5(),["SharedCodec422"]:c6(),["SharedCodec423"]:c7(),["SharedCodec424"]:c8(),["SharedCodec425"]:c9(),["SharedCodec426"]:c10(),["SharedCodec427"]:c11(),["SharedCodec428"]:c12(),["SharedCodec429"]:c13(),["SharedCodec430"]:c14(),["SharedCodec431"]:c15(),["SharedCodec432"]:c16(),["SharedCodec433"]:c17(),["SharedCodec434"]:c18(),["SharedCodec435"]:c19(),["SharedCodec436"]:c20(),["SharedCodec437"]:c21(),["SharedCodec438"]:c22(),["SharedCodec439"]:c23(),["SharedCodec440"]:c24(),["SharedCodec441"]:c25(),["SharedCodec442"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInitialGiftCardFunding(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
