import { d258 as c0 } from '../descriptors/data/13.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c1 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7731 as c2 } from '../descriptors/data/360.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7743 as c3, d7744 as c4, d7745 as c5, d7746 as c6, d7747 as c7, d7748 as c8, d7749 as c9, d7750 as c10 } from '../descriptors/data/361.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7751 as c11, d7752 as c12, d7753 as c13, d7754 as c14, d7755 as c15, d7756 as c16, d7757 as c17, d7758 as c18, d7759 as c19, d7760 as c20, d7761 as c21, d7762 as c22, d7763 as c23, d7764 as c24, d7765 as c25, d7766 as c26 } from '../descriptors/data/362.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d258 as d258 } from '../descriptors/data/13.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d258;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardLoadRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec175"]:c2(),["SharedCodec356"]:c3(),["SharedCodec357"]:c4(),["SharedCodec358"]:c5(),["SharedCodec359"]:c6(),["SharedCodec360"]:c7(),["SharedCodec361"]:c8(),["SharedCodec362"]:c9(),["SharedCodec363"]:c10(),["SharedCodec364"]:c11(),["SharedCodec365"]:c12(),["SharedCodec366"]:c13(),["SharedCodec367"]:c14(),["SharedCodec368"]:c15(),["SharedCodec369"]:c16(),["SharedCodec370"]:c17(),["SharedCodec371"]:c18(),["SharedCodec372"]:c19(),["SharedCodec373"]:c20(),["SharedCodec374"]:c21(),["SharedCodec375"]:c22(),["SharedCodec376"]:c23(),["SharedCodec377"]:c24(),["SharedCodec378"]:c25(),["SharedCodec379"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardLoadRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
