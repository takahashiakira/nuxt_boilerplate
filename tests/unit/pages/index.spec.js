import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Index from '@/pages/index.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Index.vue', () => {
  let store = {};
  let state = {};
  let actions = {};
  let mutations = {};
  let getters = {};
  let mocks = {};
  let stubs = {};
  let propsData = {};
  let computed = {};
  beforeEach(() => {
    state = {
    //   xxx: {
    //     xxx: resOrganization.results,
    //   },
    };
    actions = {
    //   'xxx/xxx': jest.fn(() => {
    //     return new Promise((resolve) => { return resolve(); });
    //   }),
    };
    mutations = {};
    getters = {
    //   getXXX: jest.fn(() => { return ''; }),
    };
    mocks = {
    //   $route: { query: {} },
    };
    stubs = {
    //   'loading-component': '<div />',
    //   transition: TransitionStub,
    };
    propsData = {};
    computed = {
    //   xxx: () => { return state.xxx.xxx; },
    };
    store = new Vuex.Store({
      state,
      mutations,
      actions,
      getters,
    });
  });
  it('should render correct contents', () => {
    const args = {
      localVue,
      store,
      mocks,
      stubs,
      propsData,
      computed,
    };
    const wrapper = shallowMount(Index, args);
    expect(wrapper.contains('.container')).toBe(true);
  });
});
