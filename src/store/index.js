import { createStore } from 'vuex';\n\nexport default createStore({\n  state: { count: 0 },\n  mutations: { increment(state) { state.count++; } }\n});
