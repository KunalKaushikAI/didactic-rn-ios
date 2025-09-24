'use strict';
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) =>
  key in obj
    ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value,
      })
    : (obj[key] = value);
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, 'default', { value: mod, enumerable: true })
      : target,
    mod,
  )
);
var __toCommonJS = mod =>
  __copyProps(__defProp({}, '__esModule', { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = value => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = value => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = x =>
      x.done
        ? resolve(x.value)
        : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  UnbxdSearchCSRWrapper: () => UnbxdSearchCSRWrapper,
  UnbxdSearchSSRWrapper: () => UnbxdSearchSSRWrapper,
  useAutosuggest: () => useAutosuggest,
  useBanner: () => useBanner,
  useBreadcrumb: () => useBreadcrumb,
  useCategory: () => useCategory,
  useFacets: () => useFacets,
  usePageSize: () => usePageSize,
  usePagination: () => usePagination,
  useProductView: () => useProductView,
  useProducts: () => useProducts,
  useQuery: () => useQuery,
  useSorting: () => useSorting,
  useVisualSearch: () => useVisualSearch,
});
module.exports = __toCommonJS(src_exports);

// src/constants/actions.ts
var UPDATE_AUTH_KEYS = 'UPDATE_AUTH_KEYS';
var UPDATE_PAGE_TO_LOAD = 'UPDATE_PAGE_TO_LOAD';
var UPDATE_ON_POPSTATE = 'UPDATE_ON_POPSTATE';
var UPDATE_PAGE_IN_URL = 'UPDATE_PAGE_IN_URL';
var UPDATE_PAGINATION = 'UPDATE_PAGINATION';
var UPDATE_QUERY = 'UPDATE_QUERY';
var UPDATE_AUTOSUGGEST = 'UPDATE_AUTOSUGGEST';
var UPDATE_SORT = 'UPDATE_SORT';
var UPDATE_ROWS = 'UPDATE_ROWS';
var UPDATE_RESPONSE = 'UPDATE_RESPONSE';
var UPDATE_VIEW = 'UPDATE_VIEW';
var UPDATE_SELECTED_FACETS = 'UPDATE_SELECTED_FACETS';
var UPDATE_STATS = 'UPDATE_STATS';
var UPDATE_CATEGORY = 'UPDATE_CATEGORY';
var UPDATE_LOADING = 'UPDATE_LOADING';
var UPDATE_ERROR = 'UPDATE_ERROR';
var ON_EVENT = 'ON_EVENT';
var ERROR_WHILE_UPDATING_STATE = 'ERROR_WHILE_UPDATING_STATE';
var UPDATE_URL = 'UPDATE_URL';

// src/constants/defaultsCommon.ts
var DEF_SITEKEY = '';
var DEF_APIKEY = '';
var DEF_LOADING = false;
var DEF_REFRESH = false;
var DEF_PAGE_SIZE = 12;
var DEF_QUERY = '';
var DEF_IMAGE_QUERY = {
  imageQuery: '',
  type: 'URL',
  contentType: '',
  id: '',
  boxId: '',
};
var DEF_AUTOSUGGEST = '';
var DEF_CATEGORY = '';
var DEF_VIEW = '';
var DEF_SORT = '';
var DEF_PAGE_NO = 1;
var DEF_PAGE_TO_LOAD = null;
var DEF_INPUT_DEBOUNCE_TIME = 500;
var DEF_SELECTED_FACETS = {};
var DEF_FORMATTED_FACETS = {};
var DEF_HASH_MODE = false;
var DEF_QUERY_PARAM_SEPERATOR = '&';
var DEF_KEY_VALUE_SEPERATOR = '=';
var DEF_ORDER_OF_PARAMS = [];
var DEF_QUERY_ADD_TO_URL = true;
var DEF_QUERY_KEY = 'query';
var DEF_IMG_QUERY_ADD_TO_URL = false;
var DEF_IMG_QUERY_KEY = 'image';
var DEF_CATEGORY_ADD_TO_URL = true;
var DEF_CATEGORY_KEY = 'browse';
var DEF_SORT_ADD_TO_URL = true;
var DEF_SORT_KEY = 'sort';
var DEF_SORT_VALUES = {};
var DEF_VIEW_ADD_TO_URL = true;
var DEF_VIEW_KEY = 'view';
var DEF_VIEW_VALUES = {};
var DEF_PAGE_SIZE_ADD_TO_URL = true;
var DEF_PAGE_SIZE_KEY = 'rows';
var DEF_PAGINATION_ADD_TO_URL = true;
var DEF_PAGINATION_KEY = 'start';
var DEF_PAGINATION_USE_PAGE_NO = true;
var DEF_FACETS_ADD_TO_URL = true;
var DEF_FACETS_VALUES_SEPARATOR = ',';
var DEF_FACETS_KEYS = {};
var DEF_FACETS_VALUES = {};
var DEF_EXTRA_PARAMS = null;
var DEF_UC_PARAM = '';
var DEF_RANGE_FACETS = [];
var DEF_CATEGORY_FACETS = [];
var DEF_NUMBER_OF_PRODUCTS = 0;
var DEF_START = 0;
var DEF_PRODUCTS = [];
var DEF_REDIRECT = {};
var DEF_FACETS = {};
var DEF_SEARCH_META_DATA = {};
var DEF_BANNERS = [];
var SEARCH_END_POINT = 'https://search.unbxd.io';
var DEF_API_CATEGORY_BROWSE_QUERY_PARAM = 'p';
var DEF_API_CATEGORY_PAGE_TYPE = '';
var DEFAULT_PRODUCT_TYPE = 'SEARCH';
var DEFAULT_FACET_MULTISELECT = true;
var DEFAULT_VARIANT = {
  enabled: false,
  count: 5,
  attributes: ['title', 'v_imageUrl'],
};
var DEFAULT_SPELLCHECK = {
  enabled: false,
};
var DEFAULT_CONFIG = {
  pageSize: 12,
  view: '',
  sort: '',
  currentPage: 1,
  query: '',
};
var DEFAULT_ONEVENT = ({ type, message, value, state }) => {
  if (message) console.log(`${type}:`, message);
  else console.log(type);
};
var DEFAULT_PRODUCTS = {
  fields: [],
};

// src/constants/events.ts
var INITIALISED = 'INITIALISED';
var BEFORE_API_CALL = 'BEFORE_API_CALL';
var AFTER_API_CALL = 'AFTER_API_CALL';
var API_ERROR = 'API_ERROR';
var QUERY_UPDATED = 'QUERY_UPDATED';
var AUTOSUGGEST_QUERY_UPDATED = 'AUTOSUGGEST_QUERY_UPDATED';
var IMAGE_SEARCH = 'IMAGE_SEARCH';
var SORT_CLICKED = 'SORT_CLICKED';
var BANNER_CLICKED = 'BANNER_CLICKED';
var BREADCRUMB_CLICKED = 'BREADCRUMB_CLICKED';
var FACET_ADDED = 'FACET_ADDED';
var FACET_REMOVED = 'FACET_REMOVED';
var FACET_CLEARED = 'FACET_CLEARED';
var PAGE_SIZE_CLICKED = 'PAGE_SIZE_CLICKED';
var PAGE_CLICKED = 'PAGE_CLICKED';
var CATEGORY_UPDATED = 'CATEGORY_UPDATED';
var PRODUCT_VIEW_CLICKED = 'PRODUCT_VIEW_CLICKED';
var ERROR = 'ERROR';

// src/hooks/UnbxdSearch/Common/context.tsx
var import_react = __toESM(require('react'));
var reducer = (state, action) => {
  if (!action || typeof action.type !== 'string') {
    return state;
  }
  const { type, payload = {} } = action;
  try {
    switch (type) {
      case UPDATE_AUTH_KEYS:
        return __spreadProps(__spreadValues({}, state), {
          siteKey: payload.siteKey,
          apiKey: payload.apiKey,
        });
      case UPDATE_PAGE_TO_LOAD: {
        const pagination = state.pagination || {};
        return __spreadProps(__spreadValues({}, state), {
          pagination: __spreadProps(__spreadValues({}, pagination), {
            pageToLoad: payload.pageToLoad,
          }),
        });
      }
      case UPDATE_ON_POPSTATE:
        return __spreadValues(__spreadValues({}, state), payload);
      case UPDATE_PAGE_IN_URL: {
        const pagination = state.pagination || {};
        return __spreadProps(__spreadValues({}, state), {
          pagination: __spreadProps(__spreadValues({}, pagination), {
            currentPageInUrl: payload.currentPageInUrl,
          }),
        });
      }
      case UPDATE_PAGINATION: {
        const pagination = state.pagination || {};
        return __spreadProps(__spreadValues({}, state), {
          pagination: __spreadProps(__spreadValues({}, pagination), {
            currentValue: Number(payload.currentPage),
            currentPageInUrl: Number(payload.currentPage),
          }),
        });
      }
      case UPDATE_QUERY: {
        const { configs = {}, pagination = {}, facets = {} } = state || {};
        return __spreadProps(__spreadValues({}, state), {
          configs: __spreadProps(__spreadValues({}, configs), {
            productType: payload.productType,
          }),
          query: { currentValue: payload.query },
          imageQuery: { currentValue: {} },
          pagination: __spreadProps(__spreadValues({}, pagination), {
            currentValue: 1,
            currentPageInUrl: 1,
          }),
          category: { currentValue: '' },
          sort: { currentValue: '' },
          facets: __spreadProps(__spreadValues({}, facets), {
            selectedFacets: [],
          }),
          autosuggest: { autosuggestQuery: payload.query },
          refresh: payload.refresh,
        });
      }
      case IMAGE_SEARCH: {
        const { configs = {}, pagination = {}, facets = {} } = state || {};
        return __spreadProps(__spreadValues({}, state), {
          configs: __spreadProps(__spreadValues({}, configs), {
            productType: payload.productType,
          }),
          imageQuery: { currentValue: payload.imageQuery },
          query: { currentValue: '' },
          category: { currentValue: '' },
          sort: { currentValue: '' },
          autosuggest: { autosuggestQuery: '' },
          pagination: __spreadProps(__spreadValues({}, pagination), {
            currentValue: 1,
            currentPageInUrl: 1,
          }),
          facets: __spreadProps(__spreadValues({}, facets), {
            selectedFacets: [],
          }),
        });
      }
      case UPDATE_AUTOSUGGEST: {
        const autosuggest = state.autosuggest || {};
        return __spreadProps(__spreadValues({}, state), {
          autosuggest: __spreadValues(
            __spreadProps(
              __spreadValues(
                __spreadProps(__spreadValues({}, autosuggest), {
                  loading:
                    typeof payload.loading === 'boolean'
                      ? payload.loading
                      : autosuggest.loading,
                }),
                typeof payload.autosuggestQuery === 'string' && {
                  autosuggestQuery: payload.autosuggestQuery,
                },
              ),
              {
                formattedResponse: __spreadValues(
                  __spreadValues(
                    __spreadValues(
                      __spreadValues(
                        __spreadValues(
                          __spreadValues(
                            __spreadValues(
                              {},
                              autosuggest == null
                                ? void 0
                                : autosuggest.formattedResponse,
                            ),
                            payload.trendingSearches && {
                              trendingSearches: payload.trendingSearches,
                            },
                          ),
                          payload.popularProducts && {
                            popularProducts: payload.popularProducts,
                          },
                        ),
                        payload.keywordSuggestions && {
                          keywordSuggestions: payload.keywordSuggestions,
                        },
                      ),
                      payload.inFieldsSuggestions && {
                        inFieldsSuggestions: payload.inFieldsSuggestions,
                      },
                    ),
                    payload.topSearchSuggestions && {
                      topSearchSuggestions: payload.topSearchSuggestions,
                    },
                  ),
                  payload.promotedSuggestions && {
                    promotedSuggestions: payload.promotedSuggestions,
                  },
                ),
              },
            ),
            payload.searchResults && {
              searchResults: __spreadValues(
                __spreadValues({}, autosuggest.searchResults),
                payload.searchResults,
              ),
            },
          ),
        });
      }
      case UPDATE_SORT: {
        const pagination = state.pagination || {};
        return __spreadProps(__spreadValues({}, state), {
          pagination: __spreadProps(__spreadValues({}, pagination), {
            currentValue: 1,
            currentPageInUrl: 1,
          }),
          sort: { currentValue: payload.sort },
        });
      }
      case UPDATE_ROWS: {
        const pagination = state.pagination || {};
        return __spreadProps(__spreadValues({}, state), {
          pagination: __spreadProps(__spreadValues({}, pagination), {
            currentValue: 1,
            currentPageInUrl: 1,
          }),
          pageSize: { currentValue: payload.pageSize },
        });
      }
      case UPDATE_RESPONSE: {
        const { facets = {} } = state || {};
        return __spreadProps(__spreadValues({}, state), {
          response: {
            apiResponse: payload.data,
            formattedProducts: payload.formattedProducts,
          },
          facets: __spreadProps(__spreadValues({}, facets), {
            formattedFacets: payload.formattedFacets,
          }),
          loading: false,
        });
      }
      case UPDATE_VIEW: {
        const pagination = state.pagination || {};
        return __spreadProps(__spreadValues({}, state), {
          view: { currentValue: payload.view },
          pagination: __spreadProps(__spreadValues({}, pagination), {
            currentValue: 1,
            currentPageInUrl: 1,
          }),
        });
      }
      case UPDATE_SELECTED_FACETS: {
        const { pagination = {}, facets = {} } = state || {};
        return __spreadProps(__spreadValues({}, state), {
          pagination: __spreadProps(__spreadValues({}, pagination), {
            currentValue: 1,
            currentPageInUrl: 1,
          }),
          facets: __spreadProps(__spreadValues({}, facets), {
            selectedFacets: payload.data,
          }),
        });
      }
      case UPDATE_STATS: {
        return __spreadProps(__spreadValues({}, state), {
          stats: payload.stats,
        });
      }
      case UPDATE_CATEGORY: {
        const { configs = {}, pagination = {}, facets = {} } = state || {};
        return __spreadProps(__spreadValues({}, state), {
          configs: __spreadProps(__spreadValues({}, configs), {
            productType: payload.productType,
          }),
          query: { currentValue: '' },
          category: { currentValue: payload.categoryPath },
          pagination: __spreadProps(__spreadValues({}, pagination), {
            currentValue: 1,
            currentPageInUrl: 1,
          }),
          sort: { currentValue: '' },
          facets: __spreadProps(__spreadValues({}, facets), {
            selectedFacets: [],
          }),
          autosuggest: { autosuggestQuery: '' },
          refresh: payload.refresh,
        });
      }
      case UPDATE_URL: {
        const { url } = payload;
        return __spreadProps(__spreadValues({}, state), {
          url: { currentValue: url },
        });
      }
      case UPDATE_LOADING:
        return __spreadProps(__spreadValues({}, state), {
          loading: payload.loading,
        });
      case UPDATE_ERROR:
        return __spreadProps(__spreadValues({}, state), {
          error: __spreadValues({}, payload.error),
        });
      case ON_EVENT: {
        const newState =
          payload.type === BEFORE_API_CALL
            ? __spreadProps(__spreadValues({}, state), { loading: true })
            : payload.type === 'API_ERROR'
            ? __spreadProps(__spreadValues({}, state), { loading: false })
            : state;
        if (typeof state.onEvent === 'function') {
          try {
            state.onEvent({
              type: payload.type,
              message: payload.message || null,
              value: payload.value || null,
              state: newState,
            });
          } catch (error) {
            console.error('Error in onEvent handler:', error);
          }
        }
        return newState;
      }
      default:
        throw new Error('type not supported');
    }
  } catch (error) {
    if (error instanceof Error) {
      state.onEvent({
        type: ERROR_WHILE_UPDATING_STATE,
        message: `${error.name}: ${error.message}`,
        value: null,
        state,
      });
    }
  }
};
var UnbxdSearchContext = import_react.default.createContext({
  state: {},
  dispatch: () => {},
});
var useUnbxdStore = () => {
  return import_react.default.useContext(UnbxdSearchContext);
};

// src/hooks/useBanner/index.ts
var useBanner = () => {
  const {
    state: {
      response: {
        apiResponse: { banner: { banners = DEF_BANNERS } = {} } = {},
      } = {},
    } = {},
    dispatch = () => {},
  } = useUnbxdStore();
  const onBannerClick = () => {
    dispatch({ type: ON_EVENT, payload: { type: BANNER_CLICKED } });
  };
  return { banners, onBannerClick };
};

// src/hooks/usePageSize/index.ts
var usePageSize = (options = []) => {
  const { state, dispatch } = useUnbxdStore();
  const { pageSize: { currentValue: pageSize = DEF_PAGE_SIZE } = {} } = state;
  const onError = (module2, message) => {
    dispatch({
      type: ON_EVENT,
      payload: { type: ERROR, message: `${module2}: ${message}` },
    });
  };
  const setPageSize = newPageSize => {
    try {
      if (
        options.length === 0 ||
        (options.includes(newPageSize) &&
          newPageSize > 0 &&
          pageSize !== newPageSize)
      ) {
        dispatch({ type: UPDATE_ROWS, payload: { pageSize: newPageSize } });
        dispatch({
          type: ON_EVENT,
          payload: {
            type: PAGE_SIZE_CLICKED,
            message: 'Page size clicked',
            value: newPageSize,
          },
        });
      } else {
        onError(
          'PageSize',
          'Selected option is either not a part of the user-defined options or is not a proper value.',
        );
      }
    } catch (error) {
      if (error instanceof Error) {
        onError('usePageSize', `${error.name}: ${error.message}`);
      }
    }
  };
  return {
    pageSize,
    setPageSize,
    onError,
  };
};

// src/hooks/useProducts/index.ts
var useProducts = () => {
  const { state = {}, dispatch } = useUnbxdStore();
  const {
    loading,
    response: {
      formattedProducts: {
        products = DEF_PRODUCTS,
        start = DEF_START,
        numberOfProducts = DEF_NUMBER_OF_PRODUCTS,
      } = {},
    } = {},
    configs: { productType = DEFAULT_PRODUCT_TYPE } = {},
  } = state;
  const onError = (module2, message) => {
    dispatch({
      type: ON_EVENT,
      payload: { type: ERROR, message: `${module2}: ${message}` },
    });
  };
  const unx_updatePageInUrl = page => {
    dispatch({ type: UPDATE_PAGE_IN_URL, payload: { currentPageInUrl: page } });
  };
  return {
    loading,
    products,
    start,
    numberOfProducts,
    productType,
    onError,
    unx_updatePageInUrl,
  };
};

// src/hooks/usePagination/index.ts
var usePagination = () => {
  const { state, dispatch } = useUnbxdStore();
  const {
    pagination: {
      currentValue: currentPage = DEF_PAGE_NO,
      currentPageInUrl = DEF_PAGE_NO,
    } = {},
  } = state || {};
  const { numberOfProducts = DEF_NUMBER_OF_PRODUCTS } = useProducts();
  const { pageSize = DEF_PAGE_SIZE } = usePageSize();
  const totalPages = Math.ceil(numberOfProducts / pageSize);
  const onError = (module2, message) => {
    dispatch({
      type: ON_EVENT,
      payload: { type: ERROR, message: `${module2}: ${message}` },
    });
  };
  const updateCurrentPage = page => {
    try {
      if (page >= 1 && page <= totalPages) {
        dispatch({
          type: UPDATE_PAGINATION,
          payload: {
            currentPage: Number(page),
          },
        });
        dispatch({
          type: ON_EVENT,
          payload: { type: PAGE_CLICKED, message: 'Page clicked', value: page },
        });
      }
    } catch (error) {
      if (error instanceof Error)
        onError('usePaginaiton', `${error.name}: ${error.message}`);
    }
  };
  const goToPage = page => updateCurrentPage(page);
  const isFirstPage = () => currentPage === 1;
  const isLastPage = () => currentPage === totalPages;
  const goToFirstPage = () => updateCurrentPage(1);
  const goToLastPage = () => updateCurrentPage(totalPages);
  const goToNextPage = () => {
    try {
      !isLastPage() && updateCurrentPage(currentPage + 1);
    } catch (error) {
      if (error instanceof Error)
        onError('usePaginaiton', `${error.name}: ${error.message}`);
    }
  };
  const goToPreviousPage = () => {
    try {
      !isFirstPage() && updateCurrentPage(currentPage - 1);
    } catch (error) {
      if (error instanceof Error)
        onError('usePaginaiton', `${error.name}: ${error.message}`);
    }
  };
  const loadPreviousPage = () => {
    try {
      dispatch({ type: UPDATE_PAGE_TO_LOAD, payload: { pageToLoad: 'prev' } });
      const products = document.querySelectorAll('[data-prank]');
      if (products.length > 0) {
        const firstProduct = products[0];
        const page = Math.floor(Number(firstProduct.dataset.prank) / pageSize);
        updateCurrentPage(page);
      }
    } catch (error) {
      if (error instanceof Error)
        onError('usePaginaiton', `${error.name}: ${error.message}`);
    }
  };
  const loadNextPage = () => {
    try {
      dispatch({ type: UPDATE_PAGE_TO_LOAD, payload: { pageToLoad: 'next' } });
      const products = document.querySelectorAll('[data-prank]');
      if (products.length > 0) {
        const lastProduct = products[products.length - 1];
        const page = Math.floor(Number(lastProduct.dataset.prank) / pageSize);
        updateCurrentPage(page + 1);
      }
    } catch (error) {
      if (error instanceof Error)
        onError('usePaginaiton', `${error.name}: ${error.message}`);
    }
  };
  return {
    numberOfProducts,
    currentPageInUrl,
    currentPage,
    totalPages,
    goToPage,
    isFirstPage,
    isLastPage,
    goToFirstPage,
    goToLastPage,
    goToNextPage,
    goToPreviousPage,
    loadPreviousPage,
    loadNextPage,
    onError,
  };
};

// src/hooks/useProductView/index.ts
var useProductView = () => {
  const { state, dispatch } = useUnbxdStore();
  const { view: { currentValue: view = DEF_VIEW } = {} } = state;
  const setView = view2 => {
    dispatch({
      type: UPDATE_VIEW,
      payload: { view: view2 },
    });
    dispatch({
      type: ON_EVENT,
      payload: {
        type: PRODUCT_VIEW_CLICKED,
        message: 'Product view clicked',
        value: view2,
      },
    });
  };
  const onError = (module2, message) => {
    dispatch({
      type: ON_EVENT,
      payload: { type: ERROR, message: `${module2}: ${message}` },
    });
  };
  return {
    view,
    setView,
    onError,
  };
};

// src/hooks/useSorting/index.ts
var useSorting = () => {
  const { state, dispatch } = useUnbxdStore();
  const { sort: { currentValue: sort = DEF_SORT } = {} } = state;
  const setSort = sort2 => {
    dispatch({
      type: UPDATE_SORT,
      payload: { sort: sort2 },
    });
    dispatch({
      type: ON_EVENT,
      payload: { type: SORT_CLICKED, message: 'Sort clicked', value: sort2 },
    });
  };
  const onError = (module2, message) => {
    dispatch({
      type: ON_EVENT,
      payload: { type: ERROR, message: `${module2}: ${message}` },
    });
  };
  return {
    sort,
    setSort,
    onError,
  };
};

// src/utils/common/helperUtils.ts
var debounce = (callback, wait) => {
  let timeoutId = null;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
};
var encodeQueryParam = (p = '') => {
  console.log('UNBXD p ===>', p);

  if (typeof p !== 'string') return p;
  let str = p.trim();
  str = str.replace(/\%26/gim, '&');
  str = encodeURIComponent(str);
  str = str.replace(/\%20/gim, '+');
  str = str.replace(/\++/gim, '+');
  return str;
};
var decodeQueryParam = (p = '') => {
  if (typeof p !== 'string') return p;
  let str = p.replace(/\+/gim, ' ');
  str = str.replace(/\s{2,}/gim, ' ');
  str = decodeURIComponent(str);
  return str.trim();
};
var encodeFacetValue = value => {
  const valCopy = value
    .replace(/\\/g, '\\\\')
    .replace(/\n/g, '\\n')
    .replace(/\t/g, '\\t')
    .replace(/\v/g, '\\v')
    .replace(/'/g, "'")
    .replace(/"/g, '\\"');
  console.log('UNBXD valCopy =>', valCopy);
  console.log(
    'UNBXD encodeURIComponent(valCopy) ==>',
    encodeURIComponent(valCopy),
  );

  return encodeURIComponent(valCopy);
};
var encodeCategoryFacetValue = value => {
  const valCopy = value
    .replace(/\\/g, '\\\\')
    .replace(/\n/g, '\\n')
    .replace(/\t/g, '\\t')
    .replace(/\v/g, '\\v')
    .replace(/'/g, "'")
    .replace(/"/g, '\\"');
  return encodeURIComponent(valCopy);
};
var decodeFacetValue = value => {
  let val = value == null ? void 0 : value.replace(/\\"/g, '"');
  val = val == null ? void 0 : val.replace(/\+/gim, ' ');
  val = decodeURIComponent(val);
  return val;
};

// src/hooks/useQuery/index.ts
var useQuery = (props = {}) => {
  const { delay = DEF_INPUT_DEBOUNCE_TIME, forceReload = false } = props;
  const { state, dispatch } = useUnbxdStore();
  const {
    response: {
      apiResponse: {
        searchMetaData: { fallback = {} } = {},
        didYouMean = [],
      } = {},
    } = {},
    query: { currentValue: query = '' } = {},
    refresh,
    configs: { defaultValues: { query: defaultQuery } = {} } = {},
  } = state;
  let { q: suggestedQuery = null } = fallback;
  if (didYouMean.length > 0) {
    suggestedQuery = didYouMean[0].suggestion;
  }
  const setQuery = debounce(newQuery => {
    if (forceReload || (!forceReload && newQuery !== query)) {
      dispatch({
        type: UPDATE_QUERY,
        payload: {
          query: newQuery || defaultQuery,
          productType: 'SEARCH',
          refresh: !refresh,
        },
      });
      dispatch({
        type: ON_EVENT,
        payload: {
          type: QUERY_UPDATED,
          message: 'Query updated',
          value: newQuery,
        },
      });
    }
  }, delay);
  const onError = (module2, message) => {
    dispatch({
      type: ON_EVENT,
      payload: { type: ERROR, message: `${module2}: ${message}` },
    });
  };
  return {
    query,
    suggestedQuery,
    setQuery,
    onError,
  };
};

// src/hooks/useVisualSearch/index.ts
var useVisualSearch = () => {
  const { state, dispatch } = useUnbxdStore();
  const { setQuery } = useQuery({});
  const {
    imageQuery: { currentValue: imageQuery },
    response: {
      apiResponse: {
        searchMetaData: {
          image: { boxes = [], id = '', selected = '' } = {},
        } = {},
      } = {},
    } = {},
  } = state;
  const convertBase64 = file => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = e => {
        resolve(fileReader.result);
      };
      fileReader.onerror = error => {
        reject(error);
      };
    });
  };
  const handleImageSearch = val =>
    __async(void 0, null, function* () {
      const { type, imageQuery: imageQuery2 } = val;
      const { type: contentType = '' } = imageQuery2;
      const imageQueryPayload =
        type === 'FILE'
          ? { imageQuery: yield convertBase64(imageQuery2), type, contentType }
          : val;
      dispatch({
        type: IMAGE_SEARCH,
        payload: { imageQuery: imageQueryPayload, productType: 'IMAGE_SEARCH' },
      });
    });
  const setImageQuery = val => {
    const { imageQuery: imageQuery2 } = val;
    if (imageQuery2) {
      handleImageSearch(val);
      dispatch({
        type: ON_EVENT,
        payload: { type: IMAGE_SEARCH, message: 'Image search', value: val },
      });
    }
  };
  const hotSpotClick = boxId => {
    setImageQuery(
      __spreadProps(__spreadValues({}, imageQuery), {
        boxId,
        id,
        type: 'HOTSPOT',
      }),
    );
  };
  const clearImage = () => {
    if (imageQuery == null ? void 0 : imageQuery.imageQuery) {
      setQuery('*');
    }
  };
  return {
    imageQuery,
    setImageQuery,
    boxes,
    id,
    selected,
    hotSpotClick,
    clearImage,
  };
};

// src/hooks/useFacets/index.ts
var useFacets = () => {
  const { state, dispatch } = useUnbxdStore();
  const {
    response: { apiResponse: { facets = {}, stats = {} } = {} } = {},
    facets: { selectedFacets = {}, formattedFacets = {} } = {},
  } = state || {};
  const onError = (module2, message) => {
    dispatch({
      type: ON_EVENT,
      payload: { type: ERROR, message: `${module2}: ${message}` },
    });
  };
  const getFacetByName = (name, searchStr) => {
    var _a, _b, _c, _d;
    const facets2 = formattedFacets;
    const facet = facets2[name] || {};
    let values = [];
    const valuesArray = [];
    try {
      switch (facet.type) {
        case 'text': {
          values = (facet == null ? void 0 : facet.values) || [];
          for (let i = 0; i < values.length; i += 2) {
            const value = values[i];
            const count = values[i + 1];
            if (searchStr) {
              if (
                value
                  .toString()
                  .toLowerCase()
                  .includes(searchStr.trim().toLowerCase())
              ) {
                valuesArray.push({
                  value,
                  count,
                });
              }
            } else {
              valuesArray.push({
                value,
                count,
              });
            }
          }
          break;
        }
        case 'range': {
          values =
            ((_a = facet == null ? void 0 : facet.values) == null
              ? void 0
              : _a.counts) || [];
          for (
            let i = 0;
            i < (values == null ? void 0 : values.length);
            i += 2
          ) {
            const start = values == null ? void 0 : values[i];
            let end =
              i == values.length - 2
                ? (Number(start) + facet.values.gap).toString()
                : values == null
                ? void 0
                : values[i + 2];
            const count = values == null ? void 0 : values[i + 1];
            valuesArray.push({
              start,
              end,
              count,
              dataId: `${start}-${end}`,
            });
          }
          break;
        }
        case 'multilevel': {
          facet.values.map(facet2 => {
            valuesArray.push(facet2);
          });
          break;
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        onError('useFacets', `${error.name}: ${error.message}`);
      }
    }
    return __spreadValues(
      {
        values: valuesArray,
        displayName: facet.displayName,
        position: facet.position,
        level: facet.level,
        type: facet.type,
        searchStr,
      },
      facet.type === 'range'
        ? {
            gap:
              (_b = facet == null ? void 0 : facet.values) == null
                ? void 0
                : _b.gap,
            start:
              (_c = facet == null ? void 0 : facet.values) == null
                ? void 0
                : _c.start,
            end:
              (_d = facet == null ? void 0 : facet.values) == null
                ? void 0
                : _d.end,
          }
        : {},
    );
  };
  const singleSelect = (name, value) => {
    try {
      const facet = getFacetByName(name);
      if (facet.type === 'multilevel') {
        dispatch({
          type: UPDATE_SELECTED_FACETS,
          payload: {
            data: __spreadProps(__spreadValues({}, selectedFacets), {
              [name]: {
                displayName: facet == null ? void 0 : facet.displayName,
                type: facet == null ? void 0 : facet.type,
                values: [value.join('>')],
              },
            }),
          },
        });
      } else {
        dispatch({
          type: UPDATE_SELECTED_FACETS,
          payload: {
            data: __spreadProps(__spreadValues({}, selectedFacets), {
              [name]: {
                displayName: facet == null ? void 0 : facet.displayName,
                type: facet == null ? void 0 : facet.type,
                values: value,
              },
            }),
          },
        });
      }

      console.log('UNBXD selectedFacets ===>', selectedFacets);

      dispatch({
        type: ON_EVENT,
        payload: { type: FACET_ADDED, message: 'Facet added', value },
      });
    } catch (error) {
      console.log('UNBXD error ==>', error);

      if (error instanceof Error) {
        onError('useFacets', `${error.name}: ${error.message}`);
      }
    }
  };
  const multiSelect = (name, value) => {
    var _a;
    try {
      const facet = getFacetByName(name);
      const existingFacets =
        ((_a = selectedFacets[name]) == null ? void 0 : _a.values) || [];
      const newFacets = [...existingFacets, ...value];
      dispatch({
        type: UPDATE_SELECTED_FACETS,
        payload: {
          data: __spreadProps(__spreadValues({}, selectedFacets), {
            [name]: {
              displayName: facet == null ? void 0 : facet.displayName,
              type: facet == null ? void 0 : facet.type,
              values: newFacets,
            },
          }),
        },
      });
      console.log('UNBXD newFacets =====>', newFacets);

      dispatch({
        type: ON_EVENT,
        payload: {
          type: FACET_ADDED,
          message: 'Facet added',
          value: newFacets.join(', '),
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        onError('useFacets', `${error.name}: ${error.message}`);
      }
    }
  };
  const addFacet = (name, value, multiselect) => {
    if (multiselect) {
      multiSelect(name, value);
    } else {
      singleSelect(name, value);
    }
  };
  const addMultipleFacets = facets2 => {
    try {
      if (!(facets2 == null ? void 0 : facets2.length)) return;
      let newFacets = {};
      facets2.forEach(({ name, value }) => {
        const facet = getFacetByName(name);
        newFacets = __spreadProps(__spreadValues({}, newFacets), {
          [name]: {
            displayName: facet == null ? void 0 : facet.displayName,
            type: facet == null ? void 0 : facet.type,
            values: value,
          },
        });
      });
      dispatch({
        type: UPDATE_SELECTED_FACETS,
        payload: {
          data: newFacets,
        },
      });
      dispatch({
        type: ON_EVENT,
        payload: {
          type: FACET_ADDED,
          message: 'Facet added',
          value: newFacets,
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        onError('useFacets', `${error.name}: ${error.message}`);
      }
    }
  };
  const removeFacet = (name, value) => {
    try {
      const facet = selectedFacets[name];
      const type = facet.type;
      const existingFacets = facet.values || [];
      const newFacets = existingFacets.filter(facetValue =>
        type === 'range'
          ? facetValue.dataId !== value.dataId
          : facetValue !== value,
      );
      let data = {};
      if (newFacets.length) {
        data = __spreadProps(__spreadValues({}, selectedFacets), {
          [name]: {
            type,
            values: newFacets,
          },
        });
      } else {
        data = __spreadValues({}, selectedFacets);
        delete data[name];
      }
      dispatch({
        type: UPDATE_SELECTED_FACETS,
        payload: {
          data,
        },
      });
      dispatch({
        type: ON_EVENT,
        payload: { type: FACET_REMOVED, message: 'Facet removed', value },
      });
    } catch (error) {
      if (error instanceof Error) {
        onError('useFacets', `${error.name}: ${error.message}`);
      }
    }
  };
  const clearFacet = name => {
    try {
      let data = {};
      if (name) {
        data = __spreadValues({}, selectedFacets);
        delete data[name];
      }
      dispatch({
        type: UPDATE_SELECTED_FACETS,
        payload: {
          data,
        },
      });
      dispatch({
        type: ON_EVENT,
        payload: { type: FACET_CLEARED, message: 'Facet cleared', name },
      });
    } catch (error) {
      if (error instanceof Error) {
        onError('useFacets', `${error.name}: ${error.message}`);
      }
    }
  };
  const sortFacets = function (a, b) {
    return formattedFacets[a].position > formattedFacets[b].position ? 1 : -1;
  };
  const orderedFacets = () => {
    try {
      return Object.keys(formattedFacets).sort(sortFacets);
    } catch (error) {
      if (error instanceof Error) {
        onError('useFacets', `${error.name}: ${error.message}`);
      }
    }
  };
  return {
    stats,
    facets,
    formattedFacets,
    orderedFacets,
    selectedFacets,
    getFacetByName,
    addFacet,
    addMultipleFacets,
    removeFacet,
    clearFacet,
    onError,
  };
};

// src/hooks/useBreadcrumb/index.ts
var useBreadcrumb = ({ name }) => {
  var _a, _b, _c, _d, _e;
  const { state, dispatch = () => {} } = useUnbxdStore();
  const { addFacet } = useFacets();
  const multilevelFacetList =
    (_d =
      (_c =
        (_b =
          (_a = state == null ? void 0 : state.response) == null
            ? void 0
            : _a.apiResponse) == null
          ? void 0
          : _b.facets) == null
        ? void 0
        : _c.multilevel) == null
      ? void 0
      : _d.list;
  const breadcrumb =
    (_e =
      multilevelFacetList == null
        ? void 0
        : multilevelFacetList.find(facet => facet.filterField === name)) == null
      ? void 0
      : _e.breadcrumb;
  const onError = (module2, message) => {
    dispatch({
      type: ON_EVENT,
      payload: { type: ERROR, message: `${module2}: ${message}` },
    });
  };
  const setBreadcrumb = (name2, value) => {
    addFacet(name2, value);
    dispatch({
      type: ON_EVENT,
      payload: {
        type: BREADCRUMB_CLICKED,
        message: 'Breadcrumb clicked',
        value,
      },
    });
  };
  const getBreadcrumbs = breadcrumb2 => {
    try {
      if (!breadcrumb2 || Object.keys(breadcrumb2).length === 0) {
        return [];
      }
      const { child, values } = breadcrumb2;
      let breadcrumbArr = [];
      if (values.length > 0) {
        breadcrumbArr.push(values[0].name);
      }
      if (child) {
        breadcrumbArr = breadcrumbArr.concat(getBreadcrumbs(child));
      }
      return breadcrumbArr;
    } catch (error) {
      if (error instanceof Error)
        onError('useBreadcrumb', `${error.name}: ${error.message}`);
      return [];
    }
  };
  return {
    breadcrumbs: breadcrumb ? getBreadcrumbs(breadcrumb) : [],
    setBreadcrumb,
  };
};

// src/hooks/useCategory/index.ts
var useCategory = (props = {}) => {
  const { forceReload = false } = props;
  const { state, dispatch } = useUnbxdStore();
  const { category: { currentValue: path = '' } = {}, refresh } = state;
  const setCategory = newPath => {
    if (forceReload || (!forceReload && newPath !== path)) {
      dispatch({
        type: UPDATE_CATEGORY,
        payload: {
          productType: 'CATEGORY',
          categoryPath: newPath,
          refresh: !refresh,
        },
      });
      dispatch({
        type: ON_EVENT,
        payload: {
          type: CATEGORY_UPDATED,
          message: 'Category clicked',
          value: newPath,
        },
      });
    }
  };
  return {
    path,
    setCategory,
  };
};

// src/hooks/useAutosuggest/index.tsx
var import_react2 = require('react');

// src/utils/common/autosuggestUtils.ts
var defaultProps = {
  enabled: false,
  delay: 0,
  minChars: 3,
  trendingSearches: {
    enabled: true,
    count: 6,
  },
  inFields: {
    enabled: true,
    count: 2,
    prefetch: false,
    filterField: 'category',
    noOfInfields: 2,
  },
  topQueries: {
    enabled: true,
    count: 2,
    prefetch: false,
  },
  keywordSuggestions: {
    enabled: true,
    count: 2,
    prefetch: false,
  },
  popularProducts: {
    enabled: true,
    count: 3,
    fields: [],
  },
  promotedSuggestions: {
    enabled: true,
    count: 3,
    prefetch: false,
  },
};

// src/hooks/useAutosuggest/index.tsx
var useAutosuggest = props => {
  var _a;
  const autoSuggestProps = {
    enabled:
      (props == null ? void 0 : props.enabled) ||
      ((_a = defaultProps) == null ? void 0 : _a.enabled),
    delay: (props == null ? void 0 : props.delay) || defaultProps.delay,
    minChars:
      (props == null ? void 0 : props.minChars) || defaultProps.minChars,
    trendingSearches: __spreadValues(
      __spreadValues({}, defaultProps.trendingSearches),
      props == null ? void 0 : props.trendingSearches,
    ),
    inFields: __spreadValues(
      __spreadValues({}, defaultProps.inFields),
      props == null ? void 0 : props.inFields,
    ),
    topQueries: __spreadValues(
      __spreadValues({}, defaultProps.topQueries),
      props == null ? void 0 : props.topQueries,
    ),
    keywordSuggestions: __spreadValues(
      __spreadValues({}, defaultProps.keywordSuggestions),
      props == null ? void 0 : props.keywordSuggestions,
    ),
    popularProducts: __spreadValues(
      __spreadValues({}, defaultProps.popularProducts),
      props == null ? void 0 : props.popularProducts,
    ),
    promotedSuggestions: __spreadValues(
      __spreadValues({}, defaultProps.promotedSuggestions),
      props == null ? void 0 : props.promotedSuggestions,
    ),
    extraParams: props == null ? void 0 : props.extraParams,
  };
  const {
    delay,
    minChars,
    trendingSearches,
    inFields,
    topQueries,
    keywordSuggestions,
    popularProducts,
    promotedSuggestions,
    extraParams,
  } = autoSuggestProps || {};
  const { state, dispatch } = useUnbxdStore();
  const cache = (0, import_react2.useRef)({});
  const {
    siteKey,
    apiKey,
    autosuggest: {
      autosuggestQuery,
      loading,
      formattedResponse: {
        trendingSearches: trendingSearchesResponse = [],
        popularProducts: popularProductsResponse = [],
        keywordSuggestions: keyWordSuggestionsResponse = [],
        topSearchSuggestions: topSearchSuggestionsResponse = [],
        inFieldsSuggestions: inFieldsResponse = [],
        promotedSuggestions: promotedSuggestionsResponse = [],
      } = {},
      searchResults = {},
    } = {},
    configs: { apiUrlConfig: { searchEndPoint = '' } = {} } = {},
    view,
  } = state;
  (0, import_react2.useEffect)(() => {
    if (
      (props == null ? void 0 : props.enabled) &&
      trendingSearchesResponse.length === 0 &&
      (trendingSearches == null ? void 0 : trendingSearches.enabled)
    ) {
      getTrendingQueries();
    }
  }, []);
  (0, import_react2.useEffect)(() => {
    autosuggestQuery &&
      dispatch({
        type: ON_EVENT,
        payload: {
          type: AUTOSUGGEST_QUERY_UPDATED,
          message: 'Autosuggest query updated',
          value: autosuggestQuery,
        },
      });
  }, [autosuggestQuery]);
  const constructExtraParams = extraParams2 => {
    var _a2;
    let url = '';
    if (
      extraParams2 &&
      ((_a2 = Object.keys(extraParams2)) == null ? void 0 : _a2.length) > 0
    ) {
      Object.keys(extraParams2).forEach(param => {
        url += `&${param}=${
          typeof extraParams2[param] == 'function'
            ? extraParams2[param]()
            : extraParams2[param]
        }`;
      });
    }
    return url;
  };
  const setAutosuggestQuery = (0, import_react2.useMemo)(
    () =>
      debounce(val => {
        if (val.length < minChars) {
          if (val.length === 0) {
            dispatch({
              type: UPDATE_AUTOSUGGEST,
              payload: {
                autosuggestQuery: '',
                loading: false,
              },
            });
            cache.current = {};
          }
          return;
        }
        dispatch({
          type: UPDATE_AUTOSUGGEST,
          payload: {
            autosuggestQuery: val,
            loading: true,
          },
        });
        if (cache.current[val]) {
          dispatch({
            type: UPDATE_AUTOSUGGEST,
            payload: __spreadValues(
              {
                loading: false,
              },
              cache.current[val],
            ),
          });
          return;
        }
        if (val.trim()) {
          getAutoSuggestResults(val);
        }
      }, delay),
    [delay],
  );
  const getTrendingQueries = () => {
    const extraParamsUrl = constructExtraParams(extraParams);
    let url = `${
      typeof searchEndPoint === 'function'
        ? searchEndPoint({ view })
        : searchEndPoint
    }/${apiKey}/${siteKey}/autosuggest?trending-queries=true&q=*${extraParamsUrl}`;
    dispatch({
      type: UPDATE_AUTOSUGGEST,
      payload: {
        loading: true,
      },
    });
    fetch(url)
      .then(response => {
        if (!response.ok) {
          dispatch({
            type: UPDATE_ERROR,
            payload: {
              error: `Network error: ${response.status} ${response.statusText}`,
            },
          });
          dispatch({ type: UPDATE_AUTOSUGGEST, payload: { loading: false } });
          return;
        }
        return response.json();
      })
      .then(response => {
        var _a2, _b, _c;
        if (
          (_a2 = response == null ? void 0 : response.response) == null
            ? void 0
            : _a2.products
        ) {
          let products =
            (_c =
              (_b = response == null ? void 0 : response.response) == null
                ? void 0
                : _b.products) == null
              ? void 0
              : _c.splice(0, trendingSearches.count);
          dispatch({
            type: UPDATE_AUTOSUGGEST,
            payload: {
              loading: false,
              trendingSearches: products,
            },
          });
        }
      })
      .catch(error => {
        dispatch({
          type: UPDATE_ERROR,
          payload: {
            error: `Error fetching trending queries: ${error.message}`,
          },
        });
        dispatch({
          type: UPDATE_AUTOSUGGEST,
          payload: { loading: false },
        });
      });
  };
  const apiUrl = (0, import_react2.useMemo)(() => {
    var _a2;
    let url = `${
      typeof searchEndPoint === 'function'
        ? searchEndPoint({ view })
        : searchEndPoint
    }/${apiKey}/${siteKey}/autosuggest?`;
    const inFieldsCount =
      (inFields == null ? void 0 : inFields.enabled) && inFields.count > 0
        ? inFields.count
        : 0;
    const topQueriesCount =
      (topQueries == null ? void 0 : topQueries.enabled) && topQueries.count > 0
        ? topQueries.count
        : 0;
    const keywordSuggestionsCount =
      (keywordSuggestions == null ? void 0 : keywordSuggestions.enabled) &&
      keywordSuggestions.count > 0
        ? keywordSuggestions.count
        : 0;
    const popularProductsCount =
      (popularProducts == null ? void 0 : popularProducts.enabled) &&
      popularProducts.count > 0
        ? popularProducts.count
        : 0;
    const promotedSuggestionsCount =
      (promotedSuggestions == null ? void 0 : promotedSuggestions.enabled) &&
      promotedSuggestions.count > 0
        ? promotedSuggestions.count
        : 0;
    url += `inFields.count=${inFieldsCount}&topQueries.count=${topQueriesCount}&keywordSuggestions.count=${keywordSuggestionsCount}&popularProducts.count=${popularProductsCount}&promotedSuggestion.count=${promotedSuggestionsCount}&indent=off`;
    if (
      (_a2 = popularProducts == null ? void 0 : popularProducts.fields) == null
        ? void 0
        : _a2.length
    ) {
      let popularProductsFields = popularProducts.fields.join(',');
      url += `&popularProducts.fields=${popularProductsFields}`;
    }
    return url;
  }, [
    inFields,
    topQueries,
    keywordSuggestions,
    popularProducts,
    promotedSuggestions,
    apiKey,
    siteKey,
  ]);
  const constructAutosuggestApiUrl = val => {
    let url = apiUrl;
    url += '&q=' + encodeURIComponent(val);
    const extraParamsUrl = constructExtraParams(extraParams);
    url += extraParamsUrl;
    return url;
  };
  const sortResponse = response => {
    var _a2, _b;
    const responseObj = {
      POPULAR_PRODUCTS: [],
      TOP_SEARCH_QUERIES: [],
      IN_FIELD: [],
      KEYWORD_SUGGESTION: [],
      PROMOTED_SUGGESTION: [],
    };
    (_b =
      (_a2 = response == null ? void 0 : response.response) == null
        ? void 0
        : _a2.products) == null
      ? void 0
      : _b.forEach(product => {
          if (product.doctype == 'POPULAR_PRODUCTS') {
            responseObj['POPULAR_PRODUCTS'].push(product);
          } else if (product.doctype == 'TOP_SEARCH_QUERIES') {
            responseObj['TOP_SEARCH_QUERIES'].push(product);
          } else if (product.doctype == 'IN_FIELD') {
            responseObj['IN_FIELD'].push(product);
          } else if (product.doctype == 'KEYWORD_SUGGESTION') {
            responseObj['KEYWORD_SUGGESTION'].push(product);
          } else if (product.doctype == 'PROMOTED_SUGGESTION') {
            responseObj['PROMOTED_SUGGESTION'].push(product);
          }
        });
    return responseObj;
  };
  const getAutoSuggestResults = val => {
    let url = constructAutosuggestApiUrl(val);
    dispatch({
      type: UPDATE_AUTOSUGGEST,
      payload: {
        loading: true,
      },
    });
    fetch(url)
      .then(response => response.json())
      .then(response => {
        const sortedResponse = sortResponse(response);
        const responseObj = {
          popularProducts: sortedResponse['POPULAR_PRODUCTS'],
          keywordSuggestions: sortedResponse['KEYWORD_SUGGESTION'],
          inFieldsSuggestions: sortedResponse['IN_FIELD'],
          topSearchSuggestions: sortedResponse['TOP_SEARCH_QUERIES'],
          promotedSuggestions: sortedResponse['PROMOTED_SUGGESTION'],
        };
        cache.current[val] = responseObj;
        dispatch({
          type: UPDATE_AUTOSUGGEST,
          payload: __spreadProps(__spreadValues({}, responseObj), {
            loading: false,
          }),
        });
        getSearchResults2(sortedResponse, val);
      })
      .catch(() => {
        dispatch({
          type: UPDATE_AUTOSUGGEST,
          payload: {
            loading: false,
          },
        });
      });
  };
  const getSearchResults2 = (response, val) => {
    let callsToMake = [];
    let array = [
      ...((keywordSuggestions == null ? void 0 : keywordSuggestions.prefetch)
        ? (response == null ? void 0 : response.KEYWORD_SUGGESTION) || []
        : []),
      ...((topQueries == null ? void 0 : topQueries.prefetch)
        ? (response == null ? void 0 : response.TOP_SEARCH_QUERIES) || []
        : []),
      ...((inFields == null ? void 0 : inFields.prefetch)
        ? (response == null ? void 0 : response.IN_FIELD) || []
        : []),
      ...((promotedSuggestions == null ? void 0 : promotedSuggestions.prefetch)
        ? (response == null ? void 0 : response.PROMOTED_SUGGESTION) || []
        : []),
    ];
    if (Array.isArray(array) && array.length > 0) {
      array.forEach(item => {
        callsToMake.push(item.autosuggest);
        if (item.doctype == 'IN_FIELD') {
          let val2 = item.autosuggest;
          let vals = item[`${inFields.filterField}_in` || 'category_in'];
          callsToMake.push({ [val2]: vals });
        }
      });
    }
    callsToMake.forEach(item => {
      if (typeof item == 'object') {
        const key = Object.keys(item)[0];
        item[key].slice(0, inFields.noOfInfields).forEach(v => {
          fetchSearchData({ query: key, filter: v });
        });
      } else {
        fetchSearchData({ query: item });
      }
    });
  };
  const fetchSearchData = ({ query, filter }) => {
    const finalCount =
      (popularProducts == null ? void 0 : popularProducts.enabled) &&
      (popularProducts == null ? void 0 : popularProducts.count) > 0
        ? popularProducts == null
          ? void 0
          : popularProducts.count
        : defaultProps.popularProducts.count;
    console.log('UNBXD query ==>', query);

    let url = `${
      typeof searchEndPoint === 'function'
        ? searchEndPoint({ view })
        : searchEndPoint
    }/${apiKey}/${siteKey}/search?q=${encodeQueryParam(
      query,
    )}&rows=${finalCount}&facet=false&omitmetadata=true`;
    if (filter) {
      url += `&filter=${inFields.filterField}:"${filter}"`;
    }
    fetch(url)
      .then(response => response.json())
      .then(response => {
        var _a2, _b;
        if (filter) {
          dispatch({
            type: UPDATE_AUTOSUGGEST,
            payload: {
              loading: false,
              searchResults: __spreadProps(__spreadValues({}, searchResults), {
                [`${query}>${filter}`]:
                  (_a2 = response == null ? void 0 : response.response) == null
                    ? void 0
                    : _a2.products,
              }),
            },
          });
        } else {
          dispatch({
            type: UPDATE_AUTOSUGGEST,
            payload: {
              loading: false,
              searchResults: __spreadProps(__spreadValues({}, searchResults), {
                [query]:
                  (_b = response == null ? void 0 : response.response) == null
                    ? void 0
                    : _b.products,
              }),
            },
          });
        }
      })
      .catch(() => {
        dispatch({
          type: UPDATE_AUTOSUGGEST,
          payload: {
            loading: false,
          },
        });
      });
  };
  return {
    autosuggestQuery,
    setAutosuggestQuery,
    loading,
    response: {
      keywordSuggestions: keyWordSuggestionsResponse,
      popularProducts: popularProductsResponse,
      inFields: inFieldsResponse,
      promotedSuggestions: promotedSuggestionsResponse,
      topSearchSuggestions: topSearchSuggestionsResponse,
      trendingSearches: trendingSearchesResponse,
    },
    searchResults,
    fetchSearchData,
  };
};

// src/hooks/UnbxdSearch/CSR/DataFetcherCSR.tsx
var import_react3 = require('react');

// src/constants/defaultsCSR.ts
var DEFAULT_SET_WEB_URL = (newUrl = '', redirect = false, replace = false) => {
  if (replace) {
    window.history.replaceState(null, '', newUrl);
  } else window.history.pushState({}, '', newUrl);
};
var DEFAULT_HEADERS = {};

// src/hooks/UnbxdSearch/Common/helpersCommon.tsx
var commonDefaultWebUrlConfig = {
  hashMode: DEF_HASH_MODE,
  queryParamSeperator: DEF_QUERY_PARAM_SEPERATOR,
  keySeperator: DEF_KEY_VALUE_SEPERATOR,
  orderOfParams: DEF_ORDER_OF_PARAMS,
  query: {
    addToUrl: DEF_QUERY_ADD_TO_URL,
    key: DEF_QUERY_KEY,
  },
  imageQuery: {
    addToUrl: DEF_IMG_QUERY_ADD_TO_URL,
    key: DEF_IMG_QUERY_KEY,
  },
  category: {
    addToUrl: DEF_CATEGORY_ADD_TO_URL,
    key: DEF_CATEGORY_KEY,
  },
  sort: {
    addToUrl: DEF_SORT_ADD_TO_URL,
    key: DEF_SORT_KEY,
    values: DEF_SORT_VALUES,
  },
  view: {
    addToUrl: DEF_VIEW_ADD_TO_URL,
    key: DEF_VIEW_KEY,
    values: DEF_VIEW_VALUES,
  },
  pageSize: {
    addToUrl: DEF_PAGE_SIZE_ADD_TO_URL,
    key: DEF_PAGE_SIZE_KEY,
  },
  pagination: {
    addToUrl: DEF_PAGINATION_ADD_TO_URL,
    key: DEF_PAGINATION_KEY,
    usePageNo: DEF_PAGINATION_USE_PAGE_NO,
  },
  facets: {
    addToUrl: DEF_FACETS_ADD_TO_URL,
    valuesSeparator: DEF_FACETS_VALUES_SEPARATOR,
    keys: DEF_FACETS_KEYS,
    values: DEF_FACETS_VALUES,
  },
  externalParams: DEF_EXTRA_PARAMS,
  rangeFacets: DEF_RANGE_FACETS,
  categoryFacets: DEF_CATEGORY_FACETS,
};
var commonDefaultApiUrlConfig = {
  searchEndPoint: SEARCH_END_POINT,
  category: {
    browseQueryParam: DEF_API_CATEGORY_BROWSE_QUERY_PARAM,
    page: '',
    page_type: DEF_API_CATEGORY_PAGE_TYPE,
  },
  products: DEFAULT_PRODUCTS,
  facetMultiSelect: DEFAULT_FACET_MULTISELECT,
  variants: DEFAULT_VARIANT,
  spellCheck: DEFAULT_SPELLCHECK,
};
var commonInitialState = {
  siteKey: DEF_SITEKEY,
  apiKey: DEF_APIKEY,
  loading: DEF_LOADING,
  externalParams: {},
  refresh: DEF_REFRESH,
  error: {},
  query: {
    currentValue: DEF_QUERY,
  },
  imageQuery: {
    currentValue: DEF_IMAGE_QUERY,
  },
  autosuggest: {
    autosuggestQuery: DEF_AUTOSUGGEST,
    loading: false,
    formattedResponse: {},
    searchResults: {},
  },
  category: {
    currentValue: DEF_CATEGORY,
  },
  sort: {
    currentValue: DEF_SORT,
  },
  pagination: {
    currentValue: DEF_PAGE_NO,
    currentPageInUrl: DEF_PAGE_NO,
    pageToLoad: DEF_PAGE_TO_LOAD,
  },
  view: {
    currentValue: DEF_VIEW,
  },
  pageSize: {
    currentValue: DEF_PAGE_SIZE,
  },
  facets: {
    selectedFacets: DEF_SELECTED_FACETS,
    formattedFacets: DEF_FORMATTED_FACETS,
  },
  response: {
    apiResponse: {
      response: {
        numberOfProducts: DEF_NUMBER_OF_PRODUCTS,
        start: DEF_START,
        products: DEF_PRODUCTS,
      },
      redirect: DEF_REDIRECT,
      facets: DEF_FACETS,
      searchMetaData: DEF_SEARCH_META_DATA,
      banner: {
        banners: DEF_BANNERS,
      },
    },
    formattedResponse: {
      numberOfProducts: DEF_NUMBER_OF_PRODUCTS,
      start: DEF_START,
      products: DEF_PRODUCTS,
    },
  },
};

// src/hooks/UnbxdSearch/CSR/helpersCSR.ts
var defaultCSRWebUrlConfig = __spreadProps(
  __spreadValues({}, commonDefaultWebUrlConfig),
  {
    setWebUrl: DEFAULT_SET_WEB_URL,
  },
);
var defaultCSRApiUrlConfig = __spreadProps(
  __spreadValues({}, commonDefaultApiUrlConfig),
  {
    headers: DEFAULT_HEADERS,
  },
);
var initialState = __spreadProps(__spreadValues({}, commonInitialState), {
  configs: {
    productType: DEFAULT_PRODUCT_TYPE,
    spellCheck: DEFAULT_SPELLCHECK,
    webUrlConfig: defaultCSRWebUrlConfig,
    apiUrlConfig: defaultCSRApiUrlConfig,
  },
});

// src/hooks/UnbxdSearch/Common/api.ts
var getFilterUrl = selectedFacets => {
  if (!selectedFacets || Object.keys(selectedFacets).length === 0) {
    return '';
  }
  let str = ``;
  if (selectedFacets && Object.keys(selectedFacets).length) {
    Object.keys(selectedFacets).forEach((facetKey, outerIndex) => {
      if (
        selectedFacets &&
        selectedFacets[facetKey] &&
        selectedFacets[facetKey].type === 'multilevel'
      ) {
        const vals = selectedFacets[facetKey].values || [];
        if (vals && vals.length) {
          str += `category-filter=${encodeCategoryFacetValue(vals.join('>'))}`;
        }
      } else {
        let facet = selectedFacets == null ? void 0 : selectedFacets[facetKey];
        let vals = facet == null ? void 0 : facet.values;
        if (vals && vals.length) {
          str += `filter=`;
          vals.forEach((val, index) => {
            str += `${facetKey}:${
              facet.type === 'range'
                ? `[${encodeFacetValue(`${val.start} TO ${val.end}`)}]`
                : `"${encodeFacetValue(val)}"`
            }`;
            if (index < vals.length - 1) {
              str += ` OR `;
            }
          });
        }
      }
      if (outerIndex < Object.keys(selectedFacets).length - 1) {
        str += '&';
      }
    });
  }
  return str;
};
var getBaseUrl = (searchEndPoint, state) => {
  const url =
    typeof searchEndPoint === 'function'
      ? searchEndPoint(state)
      : searchEndPoint || SEARCH_END_POINT;
  return `${url}/`;
};
var getQueryParamUrl = (query, categoryPath, productType, categoryConfig) => {
  if (productType === 'CATEGORY') {
    return `${categoryConfig.browseQueryParam}=${encodeURIComponent(
      categoryPath,
    )}`;
  } else if (productType === 'IMAGE_SEARCH') {
    return ``;
  }
  return `q=${encodeQueryParam(query)}`;
};
var getCurrentPageUrl = page => {
  return `&page=${page}`;
};
var getPageSizeUrl = pageSize => {
  return `&rows=${pageSize}`;
};
var getSortUrl = sort => {
  return `${(sort == null ? void 0 : sort.length) > 0 ? `&sort=${sort}` : ''}`;
};
var getMultiSelectStr = facetMultiSelect => {
  return facetMultiSelect
    ? `&facet.multiselect=true`
    : `&facet.multiselect=false`;
};
var getShowVariantsStr = variants => {
  return variants && typeof variants.enabled === 'boolean'
    ? `&variants=${variants.enabled}`
    : '';
};
var getVariantsCountStr = variants => {
  const { enabled, count } = variants;
  return count && enabled ? `&variants.count=${count}` : '';
};
var getFacetVersion = () => {
  return `&facet.version=V2`;
};
var getQueryString = productType => {
  if (productType === 'CATEGORY') {
    return '/category?';
  } else if (productType === 'IMAGE_SEARCH') {
    return '/images';
  }
  return '/search?';
};
var getVariantsAttributes = variants => {
  const { enabled, attributes } = variants;
  return (attributes == null ? void 0 : attributes.length) && enabled
    ? `&variants.fields=${attributes.join(',')}`
    : '';
};
var getSpellCheckString = spellCheck => {
  const { enabled } = spellCheck;
  return enabled ? `&spellcheck=${true}` : '';
};
var getProductsAttributesStr = products => {
  const { fields = [] } = products;
  return (fields == null ? void 0 : fields.length) > 0
    ? `&fields=${fields.join(',')}`
    : '';
};
var getUcParamString = (uc_param = '') => {
  if (uc_param) {
    if (typeof uc_param === 'function') {
      const uc_val = uc_param();
      if (uc_val) {
        return `&uc_param=${uc_val}`;
      }
    } else {
      return `&uc_param=${uc_param}`;
    }
  }
  return '';
};
var getPageTypeStr = (productType, category) => {
  if (productType === 'CATEGORY') {
    return (category == null ? void 0 : category.page_type) == 'boolean'
      ? `&pagetype=${category == null ? void 0 : category.page_type}`
      : '';
  }
  return '';
};
var getExtraParamsStr = extraParams => {
  if (extraParams) {
    let str = '';
    const keys = Object.keys(extraParams);
    keys.forEach(key => {
      const value =
        typeof extraParams[key] === 'function'
          ? extraParams[key]()
          : extraParams[key];
      if (value !== void 0 && value !== null && value !== '') {
        str += `&${key}=${value}`;
      }
    });
    return str;
  }
  return '';
};
var getDefaultHeaders = headersObj => {
  let defaultRequestHeaders = {};
  Object.entries(headersObj).forEach(([key, val]) => {
    try {
      const value = typeof val === 'function' ? val() : val;
      if (typeof value !== 'string') {
        throw new Error(
          `Invalid typeof return for key "${key}". Headers output must be a string.`,
        );
      }
      if (value !== '') {
        defaultRequestHeaders[key] = value;
      }
    } catch (error) {
      console.error(`Skipping invalid header for key "${key}":`, error.message);
    }
  });
  return defaultRequestHeaders;
};
function getImageSearchResults(url, type, imageQuery, customHeaders) {
  return __async(this, null, function* () {
    try {
      let imgQuery;
      if (type === 'FILE' || type === 'BASE_64') {
        imgQuery = imageQuery.replace('data:', '').replace(/^.+,/, '');
      } else {
        imgQuery = imageQuery;
      }
      const fetchOptions = {
        cache: 'no-store',
        headers: customHeaders,
      };
      if (type !== 'HOTSPOT') {
        fetchOptions.method = 'POST';
        fetchOptions.body =
          type === 'FILE' || type === 'BASE_64'
            ? imgQuery
            : JSON.stringify({
                imageUrl: imgQuery,
              });
      }
      const response = yield fetch(url, fetchOptions);
      const data = yield response.json();
      if (data == null ? void 0 : data.error) {
        throw data;
      } else {
        return data;
      }
    } catch (e) {
      throw e;
    }
  });
}
function getSearchResults(url, customHeaders) {
  console.log('UNBXD getSearchResults url =>', url);

  return __async(this, null, function* () {
    try {
      console.log('UNBXD before fatch url =>', url);

      const response = yield fetch(url, {
        cache: 'no-store',
        headers: customHeaders,
      });
      console.log('UNBXD response =>', response);

      if (!response.ok) {
        throw new Error(
          `Network response error: ${response.status} ${response.statusText}`,
        );
      }
      const data = yield response.json();
      if (data == null ? void 0 : data.error) {
        throw data.error;
      }
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  });
}
var getApiUrl = state => {
  var _a, _b, _c;
  const {
    siteKey,
    apiKey,
    query,
    imageQuery,
    pagination,
    sort,
    pageSize,
    view,
    facets: { selectedFacets = {} },
    category,
    configs: {
      productType,
      apiUrlConfig: {
        searchEndPoint = '',
        category: categoryConfig = {},
        facetMultiSelect = true,
        variants = {},
        spellCheck = {},
        extraParams = {},
        uc_param = '',
        products = {},
      } = {},
    },
  } = state;
  const baseUrlStr = getBaseUrl(searchEndPoint, { view });
  const queryString = getQueryString(productType);
  const queryParam = getQueryParamUrl(
    query == null ? void 0 : query.currentValue,
    category.currentValue,
    productType,
    categoryConfig,
  );
  const showVariantsStr = getShowVariantsStr(variants);
  const variantsAttributesStr = getVariantsAttributes(variants);
  const variantsCount = getVariantsCountStr(variants);
  const spellCheckString = getSpellCheckString(spellCheck);
  const sortStr = getSortUrl(sort == null ? void 0 : sort.currentValue);
  const productsAttrStr = getProductsAttributesStr(products);
  const filterStr = getFilterUrl(selectedFacets);
  const ucParamStr = getUcParamString(uc_param);
  const multiSelectStr = getMultiSelectStr(facetMultiSelect);
  const pageTypeStr = getPageTypeStr(productType, categoryConfig);
  const pageSizeStr = getPageSizeUrl(
    pageSize == null ? void 0 : pageSize.currentValue,
  );
  const pageStr = getCurrentPageUrl(
    pagination == null ? void 0 : pagination.currentValue,
  );
  const extraParamsStr = getExtraParamsStr(extraParams);
  const facetVersion = getFacetVersion();
  const sdkVersion = (extraParams == null ? void 0 : extraParams['version'])
    ? ''
    : '&version=V2';
  let url =
    productType === 'IMAGE_SEARCH'
      ? `${baseUrlStr}v2.0/sites/${siteKey}${queryString}${
          ((_a = imageQuery == null ? void 0 : imageQuery.currentValue) == null
            ? void 0
            : _a.type) === 'HOTSPOT'
            ? `/${
                (_b = imageQuery == null ? void 0 : imageQuery.currentValue) ==
                null
                  ? void 0
                  : _b.id
              }/boxes/${
                (_c = imageQuery == null ? void 0 : imageQuery.currentValue) ==
                null
                  ? void 0
                  : _c.boxId
              }`
            : ''
        }?`
      : `${baseUrlStr}${apiKey}/${siteKey}${queryString}`;
  url += `${queryParam}${pageStr}${pageSizeStr}${sortStr}${
    (filterStr == null ? void 0 : filterStr.length) > 0 ? `&${filterStr}` : ''
  }${showVariantsStr}${productsAttrStr}${variantsAttributesStr}${variantsCount}${spellCheckString}${ucParamStr}${multiSelectStr}${sdkVersion}${facetVersion}${pageTypeStr}${extraParamsStr}`;
  return url;
};
var getResults = state =>
  __async(void 0, null, function* () {
    try {
      const url = getApiUrl(state);
      console.log('UNBXD url ====>', url);

      if (!url) {
        throw new Error('Failed to generate API URL');
      }
      const {
        apiKey,
        configs: {
          apiUrlConfig: { headers: headersObject = {} } = {},
          productType,
        },
        imageQuery: {
          currentValue: { type = '', imageQuery = '', contentType = '' },
        },
      } = state;
      const headers = new Headers();
      const customHeaders = getDefaultHeaders(
        __spreadValues(
          __spreadValues({}, headersObject),
          productType === 'IMAGE_SEARCH' && {
            Authorization: apiKey,
            'Content-Type':
              type === 'FILE' || type === 'BASE_64'
                ? `${contentType};base64`
                : 'application/json',
          },
        ),
      );
      Object.keys(customHeaders).forEach(key => {
        headers.append(key, customHeaders[key]);
      });
      if (productType === 'IMAGE_SEARCH') {
        return yield getImageSearchResults(
          url,
          type,
          imageQuery,
          customHeaders,
        );
      } else {
        return yield getSearchResults(url, customHeaders);
      }
    } catch (error) {
      console.error('Error in getResults:', error);
      throw error;
    }
  });

// src/hooks/UnbxdSearch/CSR/csrApi.ts
var getResults2 = (..._0) =>
  __async(void 0, [..._0], function* (state = initialState) {
    return getResults(state);
  });

// src/hooks/UnbxdSearch/CSR/utils.ts
var getUrlString = (hashMode, url) => {
  return hashMode ? window.location.hash : window.location.search;
};
var getWebUrlConfigs = webUrlConfig => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let webUrlConfigs = {
    queryParamSeperator:
      (webUrlConfig == null ? void 0 : webUrlConfig.queryParamSeperator) ||
      ((_a = defaultCSRWebUrlConfig) == null ? void 0 : _a.queryParamSeperator),
    keySeperator:
      (webUrlConfig == null ? void 0 : webUrlConfig.keySeperator) ||
      ((_b = defaultCSRWebUrlConfig) == null ? void 0 : _b.keySeperator),
    hashMode:
      (webUrlConfig == null ? void 0 : webUrlConfig.hashMode) ||
      ((_c = defaultCSRWebUrlConfig) == null ? void 0 : _c.hashMode),
    orderOfParams:
      (webUrlConfig == null ? void 0 : webUrlConfig.orderOfParams) ||
      ((_d = defaultCSRWebUrlConfig) == null ? void 0 : _d.orderOfParams),
    query: __spreadValues(
      __spreadValues({}, defaultCSRWebUrlConfig.query),
      webUrlConfig == null ? void 0 : webUrlConfig.query,
    ),
    imageQuery: __spreadValues(
      __spreadValues({}, defaultCSRWebUrlConfig.imageQuery),
      webUrlConfig == null ? void 0 : webUrlConfig.imageQuery,
    ),
    category: __spreadValues(
      __spreadValues({}, defaultCSRWebUrlConfig.category),
      webUrlConfig == null ? void 0 : webUrlConfig.category,
    ),
    sort: __spreadValues(
      __spreadValues({}, defaultCSRWebUrlConfig.sort),
      webUrlConfig == null ? void 0 : webUrlConfig.sort,
    ),
    view: __spreadValues(
      __spreadValues({}, defaultCSRWebUrlConfig.view),
      webUrlConfig == null ? void 0 : webUrlConfig.view,
    ),
    pageSize: __spreadValues(
      __spreadValues({}, defaultCSRWebUrlConfig.pageSize),
      webUrlConfig == null ? void 0 : webUrlConfig.pageSize,
    ),
    pagination: __spreadValues(
      __spreadValues({}, defaultCSRWebUrlConfig.pagination),
      webUrlConfig == null ? void 0 : webUrlConfig.pagination,
    ),
    facets: __spreadValues(
      __spreadValues({}, defaultCSRWebUrlConfig.facets),
      webUrlConfig == null ? void 0 : webUrlConfig.facets,
    ),
    externalParams:
      (webUrlConfig == null ? void 0 : webUrlConfig.externalParams) ||
      ((_e = defaultCSRWebUrlConfig) == null ? void 0 : _e.externalParams),
    rangeFacets:
      (webUrlConfig == null ? void 0 : webUrlConfig.rangeFacets) ||
      ((_f = defaultCSRWebUrlConfig) == null ? void 0 : _f.rangeFacets),
    categoryFacets:
      (webUrlConfig == null ? void 0 : webUrlConfig.categoryFacets) ||
      ((_g = defaultCSRWebUrlConfig) == null ? void 0 : _g.categoryFacets),
    setWebUrl:
      (webUrlConfig == null ? void 0 : webUrlConfig.setWebUrl) ||
      ((_h = defaultCSRWebUrlConfig) == null ? void 0 : _h.setWebUrl),
  };
  return webUrlConfigs;
};
var getApiUrlConfigs = apiUrlConfig => {
  var _a;
  let apiUrlConfigs = {
    searchEndPoint:
      (apiUrlConfig == null ? void 0 : apiUrlConfig.searchEndPoint) ||
      defaultCSRApiUrlConfig.searchEndPoint,
    category: __spreadValues(
      __spreadValues({}, defaultCSRApiUrlConfig.category),
      apiUrlConfig == null ? void 0 : apiUrlConfig.category,
    ),
    facetMultiSelect:
      (_a = apiUrlConfig == null ? void 0 : apiUrlConfig.facetMultiSelect) !=
      null
        ? _a
        : DEFAULT_FACET_MULTISELECT,
    products: __spreadValues(
      __spreadValues({}, defaultCSRApiUrlConfig.products),
      apiUrlConfig == null ? void 0 : apiUrlConfig.products,
    ),
    variants: __spreadValues(
      __spreadValues({}, defaultCSRApiUrlConfig.variants),
      apiUrlConfig == null ? void 0 : apiUrlConfig.variants,
    ),
    spellCheck: __spreadValues(
      __spreadValues({}, defaultCSRApiUrlConfig.spellCheck),
      apiUrlConfig == null ? void 0 : apiUrlConfig.spellCheck,
    ),
    extraParams:
      (apiUrlConfig == null ? void 0 : apiUrlConfig.extraParams) || {},
    uc_param:
      (apiUrlConfig == null ? void 0 : apiUrlConfig.uc_param) || DEF_UC_PARAM,
    headers: __spreadValues(
      __spreadValues({}, DEFAULT_HEADERS),
      apiUrlConfig == null ? void 0 : apiUrlConfig.headers,
    ),
  };
  return apiUrlConfigs;
};

// src/hooks/useWebUrl/index.ts
var useWebUrl = config => {
  const { state, dispatch } = useUnbxdStore();
  const {
    facets: { selectedFacets = {} } = {},
    configs,
    configs: {
      webUrlConfig: { setWebUrl, facets: { valuesSeparator = '' } = {} } = {},
    } = {},
  } = state;
  const getQueryParamSeperator2 = config2 => {
    return (
      (config2 == null ? void 0 : config2.queryParamSeperator) ||
      DEF_QUERY_PARAM_SEPERATOR
    );
  };
  const getKeySeperator2 = config2 => {
    return (
      (config2 == null ? void 0 : config2.keySeperator) ||
      DEF_KEY_VALUE_SEPERATOR
    );
  };
  const getParamsObj = (
    params,
    ssrUrl,
    finalKeySeperator,
    valuesSeparator2,
  ) => {
    let returnVal = {};
    params == null
      ? void 0
      : params.forEach(param => {
          const cleanParam =
            ssrUrl && param.endsWith('=') ? param.slice(0, -1) : param;
          const vlas = cleanParam.split(finalKeySeperator);
          const key = vlas[0];
          const val = vlas[1];
          returnVal = __spreadProps(__spreadValues({}, returnVal), {
            [decodeURIComponent(key)]:
              isFilter2(key) || isCategoryFacet2(key) || isRangeFacet2(key)
                ? decodeFacetValue(val).split(valuesSeparator2)
                : decodeQueryParam(val),
          });
        });
    return returnVal;
  };
  const getQueryParams2 = (finalUrl, ssrUrl) => {
    var _a;
    let returnVal = {};
    if (finalUrl) {
      let finalKeySeperator, finalQueryParamSeperator;
      const queryParamSeperator = getQueryParamSeperator2(config);
      const keySeperator = getKeySeperator2(config);
      if (ssrUrl) {
        finalQueryParamSeperator =
          queryParamSeperator !== '&'
            ? encodeQueryParam(getQueryParamSeperator2(config))
            : getQueryParamSeperator2(config);
        finalKeySeperator =
          keySeperator !== '='
            ? encodeQueryParam(getKeySeperator2(config))
            : getKeySeperator2(config);
      } else {
        finalQueryParamSeperator = getQueryParamSeperator2(config);
        finalKeySeperator = getKeySeperator2(config);
      }
      const splitUrl =
        ((config == null ? void 0 : config.hashMode)
          ? finalUrl.split('#')[1]
          : finalUrl.split('?')[1]) || finalUrl;
      const params = splitUrl.split(finalQueryParamSeperator);
      return getParamsObj(
        params,
        ssrUrl,
        finalKeySeperator,
        (_a = config == null ? void 0 : config.facets) == null
          ? void 0
          : _a.valuesSeparator,
      );
    }
    return returnVal;
  };
  const getKeyByValue2 = (object, value) => {
    return Object.keys(object).find(key => object[key] === value) || value;
  };
  const orderParams2 = (url, config2) => {
    var _a;
    if (
      ((_a = config2 == null ? void 0 : config2.orderOfParams) == null
        ? void 0
        : _a.length) > 0
    ) {
      let newUrl = '';
      const params = getQueryParams2(url);
      const newParams = Object.keys(params).filter(
        item =>
          !(config2 == null ? void 0 : config2.orderOfParams.includes(item)),
      );
      const remainingKeys = [
        ...(config2 == null ? void 0 : config2.orderOfParams),
        ...newParams,
      ];
      remainingKeys == null
        ? void 0
        : remainingKeys.forEach((param, index) => {
            var _a2, _b;
            if (params[param]) {
              if (index > 0 && newUrl != '') {
                newUrl += `${getQueryParamSeperator2(config2)}`;
              }
              newUrl += `${encodeURIComponent(param)}${getKeySeperator2(
                config2,
              )}`;
              if (
                param ===
                ((_a2 = config2 == null ? void 0 : config2.query) == null
                  ? void 0
                  : _a2.key)
              ) {
                newUrl += encodeQueryParam(params[param]);
              } else if (
                (isFilter2(param) ||
                  isRangeFacet2(param) ||
                  isCategoryFacet2(param)) &&
                Array.isArray(params[param])
              ) {
                newUrl +=
                  (_b = params[param]) == null
                    ? void 0
                    : _b
                        .map(val => encodeFacetValue(val))
                        .join(valuesSeparator);
              } else {
                newUrl += encodeURIComponent(String(params[param]));
              }
            }
          });
      return newUrl;
    }
    return url;
  };
  const getExternalParams2 = () => {
    const externalParamsObj = {};
    const externalParams = config == null ? void 0 : config.externalParams;
    const params = getQueryParams2(window.location.search);
    let url = '';
    if (externalParams) {
      if (externalParams.length > 0) {
        Object.keys(params).forEach(param => {
          if (externalParams.includes(param)) {
            externalParamsObj[param] = params[param];
            url += `${getQueryParamSeperator2(
              config,
            )}${param}${getKeySeperator2(config)}${params[param]}`;
          }
        });
      } else {
        Object.keys(params).forEach(param => {
          if (
            !isFilter2(param) &&
            !isRangeFacet2(param) &&
            !isCategoryFacet2(param) &&
            !isUnbxdKey2(decodeURIComponent(param))
          ) {
            externalParamsObj[param] = params[param];
            url += `${getQueryParamSeperator2(
              config,
            )}${param}${getKeySeperator2(config)}${params[param]}`;
          }
        });
      }
    }
    return url;
  };
  const getFacetsUrl2 = () => {
    var _a, _b;
    let url = '';
    if (
      (_a = config == null ? void 0 : config.facets) == null
        ? void 0
        : _a.addToUrl
    ) {
      const facetObj = selectedFacets || {};
      (_b = Object.keys(facetObj)) == null
        ? void 0
        : _b.forEach(facet => {
            var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
            const obj = facetObj[facet];
            const keys =
              (_a2 = config == null ? void 0 : config.facets) == null
                ? void 0
                : _a2.keys;
            const keyV = keys[facet] || facet;
            let valuesStr = ``;
            if (
              ((_b2 = facetObj[facet]) == null ? void 0 : _b2.type) === 'text'
            ) {
              const replacedValues =
                (_c = config == null ? void 0 : config.facets) == null
                  ? void 0
                  : _c.values;
              valuesStr =
                (_f =
                  (_d = obj == null ? void 0 : obj.values) == null
                    ? void 0
                    : _d.map(obj2 => {
                        var _a3, _b3;
                        return (
                          (_a3 = replacedValues[facet]) == null
                            ? void 0
                            : _a3[obj2]
                        )
                          ? encodeURIComponent(
                              (_b3 = replacedValues[facet]) == null
                                ? void 0
                                : _b3[obj2],
                            )
                          : encodeURIComponent(obj2);
                      })) == null
                  ? void 0
                  : _f.join(
                      (_e = config == null ? void 0 : config.facets) == null
                        ? void 0
                        : _e.valuesSeparator,
                    );
            } else if (
              ((_g = facetObj[facet]) == null ? void 0 : _g.type) === 'range'
            ) {
              valuesStr =
                (_j =
                  (_h = obj == null ? void 0 : obj.values) == null
                    ? void 0
                    : _h.map(obj2 =>
                        encodeURIComponent(`${obj2.start}-${obj2.end}`),
                      )) == null
                  ? void 0
                  : _j.join(
                      (_i = config == null ? void 0 : config.facets) == null
                        ? void 0
                        : _i.valuesSeparator,
                    );
            } else if (
              ((_k = facetObj[facet]) == null ? void 0 : _k.type) ===
              'multilevel'
            ) {
              valuesStr =
                (_m =
                  (_l = obj == null ? void 0 : obj.values) == null
                    ? void 0
                    : _l.map(obj2 => encodeURIComponent(obj2))) == null
                  ? void 0
                  : _m.join('>');
            }
            url += `${getQueryParamSeperator2(config)}${keyV}${getKeySeperator2(
              config,
            )}${valuesStr}`;
          });
    }
    return url;
  };
  const getUrl2 = key => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const { webUrlConfig: config2, productType } = configs;
    if (
      (key === 'query' && productType != 'SEARCH') ||
      (key === 'category' && productType != 'CATEGORY') ||
      (key === 'imageQuery' && productType !== 'IMAGE_SEARCH')
    ) {
      return '';
    }
    if (
      ((_a = config2 == null ? void 0 : config2[key]) == null
        ? void 0
        : _a.addToUrl) &&
      state[key] !== void 0 &&
      ((_b = state[key]) == null ? void 0 : _b['currentValue']) !== ''
    ) {
      const values =
        (_c = config2 == null ? void 0 : config2[key]) == null
          ? void 0
          : _c.values;
      let value =
        (values == null
          ? void 0
          : values[(_d = state[key]) == null ? void 0 : _d['currentValue']]) ||
        ((_e = state[key]) == null ? void 0 : _e['currentValue']);
      if (key === 'imageQuery') {
        value =
          (value == null ? void 0 : value.type) === 'URL'
            ? value == null
              ? void 0
              : value.imageQuery
            : '';
      }
      if (key === 'pagination') {
        value =
          (values == null
            ? void 0
            : values[
                (_f = state[key]) == null ? void 0 : _f['currentPageInUrl']
              ]) ||
          ((_g = state[key]) == null ? void 0 : _g['currentPageInUrl']);
        if (
          !((_h = config2 == null ? void 0 : config2['pagination']) == null
            ? void 0
            : _h.usePageNo)
        ) {
          value =
            ((_i = state == null ? void 0 : state['pageSize']) == null
              ? void 0
              : _i.currentValue) *
            (value - 1);
        }
      }
      return `${
        key !== 'query' && key != 'category' && key != 'imageQuery'
          ? getQueryParamSeperator2(config2)
          : ''
      }${encodeURIComponent(
        config2 == null ? void 0 : config2[key].key,
      )}${getKeySeperator2(config2)}${encodeURIComponent(value)}`;
    }
    return '';
  };
  const isFilter2 = item => {
    let isFilter3 = false;
    const keys = config == null ? void 0 : config.facets.keys;
    if (isUnbxdKey2(item)) {
      isFilter3 = false;
    } else {
      isFilter3 =
        Object.values(keys).includes(item) ||
        item.includes('_uFilter') ||
        item == (config == null ? void 0 : config.key);
    }
    return isFilter3;
  };
  const isUnbxdKey2 = item => {
    var _a, _b, _c, _d, _e, _f, _g;
    let isUnbxdKey3 = false;
    if (
      [
        (_a = config == null ? void 0 : config.query) == null ? void 0 : _a.key,
        (_b = config == null ? void 0 : config.category) == null
          ? void 0
          : _b.key,
        (_c = config == null ? void 0 : config.sort) == null ? void 0 : _c.key,
        (_d = config == null ? void 0 : config.view) == null ? void 0 : _d.key,
        (_e = config == null ? void 0 : config.pageSize) == null
          ? void 0
          : _e.key,
        (_f = config == null ? void 0 : config.imageQuery) == null
          ? void 0
          : _f.key,
        (_g = config == null ? void 0 : config.pagination) == null
          ? void 0
          : _g.key,
      ].includes(item)
    ) {
      isUnbxdKey3 = true;
    }
    return isUnbxdKey3;
  };
  const isRangeFacet2 = name => {
    var _a, _b;
    return (_b =
      (_a = config == null ? void 0 : config.rangeFacets) == null
        ? void 0
        : _a.includes(name)) != null
      ? _b
      : false;
  };
  const isCategoryFacet2 = name => {
    var _a, _b;
    return (_b =
      (_a = config == null ? void 0 : config.categoryFacets) == null
        ? void 0
        : _a.includes(name)) != null
      ? _b
      : false;
  };
  const fetchStateValue2 = (params, key) => {
    var _a;
    const localstate = {};
    const targetConfig = config == null ? void 0 : config[key];
    if (targetConfig == null ? void 0 : targetConfig.addToUrl) {
      const paramValue = params[encodeURIComponent(targetConfig.key)];
      if (paramValue) {
        if (key === 'pagination') {
          localstate[key] = (
            targetConfig == null ? void 0 : targetConfig.usePageNo
          )
            ? Number(paramValue)
            : Math.ceil(
                Number(paramValue) /
                  Number(
                    params.rows ||
                      ((_a = state == null ? void 0 : state.pageSize) == null
                        ? void 0
                        : _a.currentValue),
                  ),
              ) + 1;
        } else if (key === 'pageSize') {
          localstate[key] = Number(paramValue);
        } else if (key === 'imageQuery') {
          localstate[key] = {
            imageQuery: paramValue,
            type: 'URL',
          };
        } else {
          const values = targetConfig.values || {};
          const value = getKeyByValue2(values, paramValue) || paramValue;
          localstate[key] = value;
        }
      }
    }
    return localstate[key] || '';
  };
  const fetchFilterStateValue2 = params => {
    let selectedFacets2 = {};
    const configObj = config == null ? void 0 : config['facets'];
    const {
      addToUrl,
      keys,
      values,
      valuesSeparator: valuesSeparator2,
    } = configObj;
    if (addToUrl) {
      Object.keys(params).forEach(param => {
        const isTextFilter = isFilter2(param);
        const isRangeFilter = isRangeFacet2(param);
        const isCategoryFilter = isCategoryFacet2(param);
        switch (true) {
          case isTextFilter: {
            const key = getKeyByValue2(keys, param) || param;
            const value = params[param];
            const vals = value.map(val => {
              let mainVal = '';
              if (values == null ? void 0 : values[key]) {
                mainVal = getKeyByValue2(
                  values == null ? void 0 : values[key],
                  val,
                );
              }
              return mainVal || val;
            });
            selectedFacets2 = __spreadProps(
              __spreadValues({}, selectedFacets2),
              { [key]: { type: 'text', values: vals } },
            );
            break;
          }
          case isRangeFilter: {
            const values2 = params[param];
            const formattedVals = values2.map(val => {
              const splitVal = val.split('-');
              return { start: splitVal[0], end: splitVal[1], dataId: val };
            });
            selectedFacets2 = __spreadProps(
              __spreadValues({}, selectedFacets2),
              { [param]: { type: 'range', values: formattedVals } },
            );
            break;
          }
          case isCategoryFilter: {
            const values2 = params[param].map(val => decodeURIComponent(val));
            selectedFacets2 = __spreadProps(
              __spreadValues({}, selectedFacets2),
              { [param]: { type: 'multilevel', values: values2 } },
            );
            break;
          }
          default: {
            break;
          }
        }
      });
    }
    return selectedFacets2;
  };
  const createStateFromUrl2 = ssrUrl => {
    const finalUrl =
      ssrUrl != null
        ? ssrUrl
        : getUrlString(config == null ? void 0 : config.hashMode, ssrUrl);
    const params = getQueryParams2(finalUrl, ssrUrl);
    const localstate = {};
    localstate['query'] = fetchStateValue2(params, 'query');
    localstate['category'] = fetchStateValue2(params, 'category');
    localstate['imageQuery'] = fetchStateValue2(params, 'imageQuery');
    localstate['sort'] = fetchStateValue2(params, 'sort');
    localstate['view'] = fetchStateValue2(params, 'view');
    localstate['pageSize'] = fetchStateValue2(params, 'pageSize');
    localstate['currentPage'] = fetchStateValue2(params, 'pagination');
    localstate['selectedFacets'] = fetchFilterStateValue2(params);
    return localstate;
  };
  const generateWebUrl2 = (replace = false) => {
    var _a;
    try {
      let url = '';
      const queryUrl = getUrl2('query');
      const browseUrl = getUrl2('category');
      const sortUrl = getUrl2('sort');
      const viewUrl = getUrl2('view');
      const imageUrl = getUrl2('imageQuery');
      const pageSizeUrl = getUrl2('pageSize');
      const currentPageUrl = getUrl2('pagination');
      const facetsUrl = getFacetsUrl2();
      const externalParamsUrl = getExternalParams2();
      url =
        (imageUrl || browseUrl || queryUrl) +
        sortUrl +
        viewUrl +
        pageSizeUrl +
        currentPageUrl +
        facetsUrl +
        externalParamsUrl;
      url = url.startsWith('&') ? url.substring(1) : url;
      if (window.location.search.split('?')[1] !== url) {
        let newUrl = '';
        const orderOfParams = orderParams2(
          url,
          configs == null ? void 0 : configs.webUrlConfig,
        );
        if (orderOfParams.length > 0) {
          newUrl = `${window.location.pathname}${
            (
              (_a = configs == null ? void 0 : configs.webUrlConfig) == null
                ? void 0
                : _a.hashMode
            )
              ? '#'
              : '?'
          }${orderOfParams}`;
        } else newUrl = `${window.location.pathname}`;
        typeof setWebUrl == 'function'
          ? setWebUrl(newUrl, false, replace)
          : DEFAULT_SET_WEB_URL(newUrl, false, replace);
      }
    } catch (error) {
      dispatch({
        type: ON_EVENT,
        payload: { type: ERROR, message: `Error in generateWebUrl: ${error}` },
      });
    }
  };
  return {
    createStateFromUrl: createStateFromUrl2,
    generateWebUrl: generateWebUrl2,
  };
};

// src/utils/common/deepCompare.ts
function deepCompare(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) return false;
    return obj1.every((elem, index) => {
      return deepCompare(elem, obj2[index]);
    });
  }
  if (
    typeof obj1 === 'object' &&
    typeof obj2 === 'object' &&
    obj1 !== null &&
    obj2 !== null
  ) {
    if (Array.isArray(obj1) || Array.isArray(obj2)) return false;
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (
      keys1.length !== keys2.length ||
      !keys1.every(key => keys2.includes(key))
    )
      return false;
    for (let key in obj1) {
      let isEqual = deepCompare(obj1[key], obj2[key]);
      if (!isEqual) {
        return false;
      }
    }
    return true;
  }
  return false;
}

// src/utils/common/commonUtils.ts
var shouldFetchData = (query, category, imageQuery) => {
  var _a;
  return (
    ((query == null ? void 0 : query.currentValue) ||
      (category == null ? void 0 : category.currentValue) ||
      ((_a = imageQuery == null ? void 0 : imageQuery.currentValue) == null
        ? void 0
        : _a.imageQuery)) &&
    typeof window !== 'undefined'
  );
};
var getDefaults = defaultValues => {
  let defaults = {
    query: (defaultValues == null ? void 0 : defaultValues.query) || DEF_QUERY,
    view: (defaultValues == null ? void 0 : defaultValues.view) || DEF_VIEW,
    sort: (defaultValues == null ? void 0 : defaultValues.sort) || DEF_SORT,
    pageSize:
      (defaultValues == null ? void 0 : defaultValues.pageSize) ||
      DEF_PAGE_SIZE,
    currentPage:
      (defaultValues == null ? void 0 : defaultValues.currentPage) ||
      DEF_PAGE_NO,
  };
  return defaults;
};
var getFinalState = (urlState, defaultValues, apiUrlConfigs) => {
  const defaults = getDefaults(defaultValues);
  const finalState = {
    autosuggest: {
      autosuggestQuery:
        (urlState == null ? void 0 : urlState.query) ||
        (defaults == null ? void 0 : defaults.query) ||
        DEF_AUTOSUGGEST,
    },
    query: {
      currentValue:
        (urlState == null ? void 0 : urlState.query) ||
        (defaults == null ? void 0 : defaults.query) ||
        DEF_QUERY,
    },
    imageQuery: {
      currentValue: (urlState == null ? void 0 : urlState.imageQuery) || '',
    },
    category: {
      currentValue:
        (urlState == null ? void 0 : urlState.category) ||
        apiUrlConfigs.category.page ||
        '',
    },
    view: {
      currentValue:
        (urlState == null ? void 0 : urlState.view) ||
        (defaults == null ? void 0 : defaults.view) ||
        DEF_VIEW,
    },
    sort: {
      currentValue:
        (urlState == null ? void 0 : urlState.sort) ||
        (defaults == null ? void 0 : defaults.sort) ||
        DEF_SORT,
    },
    pageSize: {
      currentValue:
        (urlState == null ? void 0 : urlState.pageSize) ||
        (defaultValues == null ? void 0 : defaultValues.pageSize) ||
        DEF_PAGE_SIZE,
    },
    pagination: {
      currentValue:
        (urlState == null ? void 0 : urlState.currentPage) ||
        (defaultValues == null ? void 0 : defaultValues.currentPage) ||
        DEF_PAGE_NO,
      currentPageInUrl:
        (urlState == null ? void 0 : urlState.currentPage) ||
        (defaultValues == null ? void 0 : defaultValues.currentPage) ||
        DEF_PAGE_NO,
      pageToLoad: null,
    },
    facets: {
      selectedFacets:
        (urlState == null ? void 0 : urlState.selectedFacets) || {},
      formattedFacets: {},
    },
    externalParams: (urlState == null ? void 0 : urlState.externalParams) || {},
  };
  return finalState;
};
var generateNewState = (state, params) => {
  const {
    configs: {
      defaultValues: { pageSize, view, sort, currentPage, query } = {},
    },
  } = state;
  const newState = {};
  if (state.query.currentValue !== params.query) {
    newState['query'] = {
      currentValue: state.query.currentValue || query,
    };
  }
  if (state.pagination.currentValue !== params.currentPage) {
    newState['pagination'] = {
      currentValue: state.pagination.currentValue || currentPage,
      currentPageInUrl: state.pagination.currentPageInUrl || currentPage,
      pageToLoad: state.pagination.pageToLoad,
    };
  }
  if (state.sort.currentValue !== params.sort) {
    newState['sort'] = {
      currentValue: state.sort.currentValue || sort,
    };
  }
  if (state.pageSize.currentValue !== params.pageSize) {
    newState['pageSize'] = {
      currentValue: state.pageSize.currentValue || pageSize,
    };
  }
  if (state.view.currentValue !== params.view) {
    newState['view'] = {
      currentValue: state.view.currentValue || view,
    };
  }
  if (!deepCompare(state.facets.selectedFacets, params.selectedFacets)) {
    newState['facets'] = {
      selectedFacets: state.facets.selectedFacets,
    };
  }
  return newState;
};

// src/hooks/UnbxdSearch/Common/formatFacets.tsx
var formatFacets = facets => {
  var _a;
  let transformedFacets = {};
  try {
    for (const type in facets) {
      if (facets.hasOwnProperty(type)) {
        const facetList =
          ((_a = facets[type]) == null ? void 0 : _a.list) || [];
        for (const item of facetList) {
          const { values, displayName, facetName, filterField, position } =
            item;
          transformedFacets[facetName || filterField] = {
            values,
            displayName,
            position,
            type,
          };
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
  return transformedFacets;
};
var formatFacets_default = formatFacets;

// src/hooks/UnbxdSearch/Common/formatProducts.tsx
var addProductIdx = (products, start) => {
  return products.map((product, idx) => {
    return __spreadProps(__spreadValues({}, product), { idx: idx + start + 1 });
  });
};
var replaceProducts = responseObj => {
  const newProducts = [
    ...(responseObj == null ? void 0 : responseObj.products),
  ];
  const start = responseObj.start;
  return addProductIdx(newProducts, Number(start));
};
var appendProducts = (responseObj, existingProducts) => {
  var _a, _b;
  const { start, products } = responseObj;
  const firstExistingProductIdx =
    (_a = existingProducts[0]) == null ? void 0 : _a.idx;
  const lastExistingProductIdx =
    (_b = existingProducts[existingProducts.length - 1]) == null
      ? void 0
      : _b.idx;
  const newProducts = addProductIdx(products, Number(start));
  if (start >= lastExistingProductIdx) {
    return [...existingProducts, ...newProducts];
  } else if (start < firstExistingProductIdx) {
    return [...newProducts, ...existingProducts];
  }
};
var formatProducts = (data, state) => {
  var _a, _b, _c, _d;
  let responseObj = __spreadValues({}, data.response);
  if (
    ((_d =
      (_c =
        (_b =
          (_a = state == null ? void 0 : state.response) == null
            ? void 0
            : _a.apiResponse) == null
          ? void 0
          : _b.response) == null
        ? void 0
        : _c.products) == null
      ? void 0
      : _d.length) === 0 ||
    !(state == null ? void 0 : state.pagination.pageToLoad)
  ) {
    responseObj['products'] = replaceProducts(responseObj);
  } else {
    const renderedProducts = appendProducts(
      responseObj,
      state.response.formattedProducts.products,
    );
    responseObj['products'] = renderedProducts;
  }
  return responseObj;
};

// src/hooks/UnbxdSearch/CSR/DataFetcherCSR.tsx
var import_jsx_runtime = require('react/jsx-runtime');
function DataFetcherCSR({ children }) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const { state, dispatch } = useUnbxdStore();
  const {
    query,
    category,
    imageQuery,
    pagination: { pageToLoad },
    configs: { webUrlConfig, webUrlConfig: { setWebUrl } = {} },
  } = state;
  const {
    generateWebUrl: generateWebUrl2,
    createStateFromUrl: createStateFromUrl2,
  } = useWebUrl(webUrlConfig);
  const handlePopState = () => {
    const params = createStateFromUrl2(window.location.search);
    const newState = generateNewState(state, params);
    if (Object.keys(newState).length) {
      dispatch({
        type: UPDATE_ON_POPSTATE,
        payload: newState,
      });
    }
  };
  (0, import_react3.useEffect)(() => {
    dispatch({ type: ON_EVENT, payload: { type: INITIALISED } });
  }, []);
  (0, import_react3.useEffect)(() => {
    const retrieveData = shouldFetchData(query, category, imageQuery);
    if (retrieveData) {
      const fetchData = () => {
        var _a2;
        if (
          !(query == null ? void 0 : query.currentValue) &&
          !(category == null ? void 0 : category.currentValue) &&
          !((_a2 = imageQuery == null ? void 0 : imageQuery.currentValue) ==
          null
            ? void 0
            : _a2.imageQuery)
        ) {
          return;
        }
        try {
          dispatch({ type: ON_EVENT, payload: { type: BEFORE_API_CALL } });
          getResults2(state)
            .then(responseObject => {
              var _a3, _b3, _c2, _d2;
              if (
                (_b3 =
                  (_a3 =
                    responseObject == null ? void 0 : responseObject.data) ==
                  null
                    ? void 0
                    : _a3.redirect) == null
                  ? void 0
                  : _b3.value
              ) {
                setWebUrl &&
                  setWebUrl(
                    (_d2 =
                      (_c2 =
                        responseObject == null
                          ? void 0
                          : responseObject.data) == null
                        ? void 0
                        : _c2.redirect) == null
                      ? void 0
                      : _d2.value,
                    true,
                    false,
                  );
              } else {
                generateWebUrl2(pageToLoad ? true : false);
                const formattedProducts = formatProducts(responseObject, state);
                const formattedFacets = formatFacets_default(
                  responseObject == null ? void 0 : responseObject.facets,
                );
                dispatch({
                  type: UPDATE_RESPONSE,
                  payload: {
                    formattedProducts,
                    data: responseObject,
                    formattedFacets,
                  },
                });
                if (pageToLoad) {
                  dispatch({
                    type: UPDATE_PAGE_TO_LOAD,
                    payload: { pageToLoad: null },
                  });
                }
                dispatch({ type: ON_EVENT, payload: { type: AFTER_API_CALL } });
              }
            })
            .catch(response => {
              generateWebUrl2(pageToLoad ? true : false);
              if (response instanceof Error) {
                const _a3 = response,
                  { name, message, stack } = _a3,
                  rest = __objRest(_a3, ['name', 'message', 'stack']);
                dispatch({
                  type: UPDATE_ERROR,
                  payload: {
                    error: __spreadValues({ name, message, stack }, rest),
                  },
                });
              } else {
                dispatch({
                  type: UPDATE_ERROR,
                  payload: { error: __spreadValues({}, response) },
                });
              }
              dispatch({
                type: ON_EVENT,
                payload: { type: API_ERROR, message: response },
              });
            });
        } catch (error) {
          generateWebUrl2(pageToLoad ? true : false);
          if (error instanceof Error) {
            const _b2 = error,
              { name, message, stack } = _b2,
              rest = __objRest(_b2, ['name', 'message', 'stack']);
            dispatch({
              type: UPDATE_ERROR,
              payload: {
                error: __spreadValues({ name, message, stack }, rest),
              },
            });
            dispatch({
              type: ON_EVENT,
              payload: { type: API_ERROR, message: error.message },
            });
          }
        }
      };
      fetchData();
    }
  }, [
    (_a = state == null ? void 0 : state.pagination) == null
      ? void 0
      : _a.currentValue,
    (_b = state == null ? void 0 : state.query) == null
      ? void 0
      : _b.currentValue,
    (_c = state == null ? void 0 : state.sort) == null
      ? void 0
      : _c.currentValue,
    (_d = state == null ? void 0 : state.pageSize) == null
      ? void 0
      : _d.currentValue,
    (_e = state == null ? void 0 : state.facets) == null
      ? void 0
      : _e.selectedFacets,
    (_f = state == null ? void 0 : state.category) == null
      ? void 0
      : _f.currentValue,
    state.view.currentValue,
    state == null ? void 0 : state.refresh,
    state == null ? void 0 : state.imageQuery,
  ]);
  (0, import_react3.useEffect)(() => {
    var _a2;
    ((_a2 = state == null ? void 0 : state.query) == null
      ? void 0
      : _a2.currentValue) && generateWebUrl2(true);
  }, [
    (_g = state == null ? void 0 : state.pagination) == null
      ? void 0
      : _g.currentPageInUrl,
    (_h = state == null ? void 0 : state.query) == null
      ? void 0
      : _h.currentValue,
  ]);
  (0, import_react3.useEffect)(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', handlePopState);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('popstate', handlePopState);
      }
    };
  }, [
    (_i = state == null ? void 0 : state.query) == null
      ? void 0
      : _i.currentValue,
    (_j = state == null ? void 0 : state.pagination) == null
      ? void 0
      : _j.currentValue,
    (_k = state == null ? void 0 : state.sort) == null
      ? void 0
      : _k.currentValue,
    (_l = state == null ? void 0 : state.pageSize) == null
      ? void 0
      : _l.currentValue,
    (_m = state == null ? void 0 : state.facets) == null
      ? void 0
      : _m.selectedFacets,
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_jsx_runtime.Fragment,
    { children },
  );
}

// src/hooks/UnbxdSearch/CSR/UnbxdSearchCSRWrapper.tsx
var import_react4 = require('react');

// package.json
var package_default = {
  name: '@unbxd-ui/react-search-hooks',
  version: '0.1.51',
  private: false,
  license: 'MIT',
  sideEffects: false,
  main: './dist/index.js',
  module: './dist/index.mjs',
  types: './dist/index.d.ts',
  typesVersions: {
    '*': {
      'ssr-utilities': ['dist/ssr-utilities.d.ts'],
    },
  },
  files: ['dist/**'],
  scripts: {
    build:
      'tsup src/index.tsx src/ssr-utilities.ts --format esm,cjs --dts --external react --minify',
    clean: 'rm -rf dist',
    dev: 'tsup src/index.tsx src/ssr-utilities.ts --format esm,cjs --dts --external react --watch',
    typecheck: 'tsc --noEmit',
    lint: 'eslint src/',
    test: 'jest',
  },
  jest: {
    preset: '@unbxd-ui/jest-presets/browser',
  },
  devDependencies: {
    '@types/jest': '29.5.12',
    '@types/node': '20.11.24',
    '@types/react': '18.2.62',
    '@types/react-dom': '18.2.19',
    '@unbxd-ui/eslint-config': '*',
    '@unbxd-ui/jest-presets': '*',
    '@unbxd-ui/typescript-config': '*',
    jest: '29.7.0',
    react: '18.2.0',
    'react-dom': '18.2.0',
    tsup: '8.0.2',
    typescript: '5.3.3',
  },
  exports: {
    '.': './dist/index.js',
    './ssr-utilities': './dist/ssr-utilities.js',
  },
  peerDependencies: {
    react: '18.2.0',
    'react-dom': '18.2.0',
  },
  dependencies: {
    next: '14.2.5',
  },
};

// src/utils/common/deepMerge.ts
function deepMerge(obj1, obj2) {
  const result = __spreadValues({}, obj1);
  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (obj2[key] === void 0) {
        result[key] = obj1[key];
      } else if (
        typeof obj2[key] === 'object' &&
        obj2[key] !== null &&
        !Array.isArray(obj2[key])
      ) {
        result[key] = deepMerge(result[key] || {}, obj2[key]);
      } else {
        result[key] = obj2[key];
      }
    }
  }
  return result;
}

// src/hooks/UnbxdSearch/CSR/UnbxdSearchCSRWrapper.tsx
var import_jsx_runtime2 = require('react/jsx-runtime');
var UnbxdSearchCSRWrapper = ({
  children,
  siteKey = DEF_SITEKEY,
  apiKey = DEF_APIKEY,
  defaultValues = DEFAULT_CONFIG,
  webUrlConfig = defaultCSRWebUrlConfig,
  apiUrlConfig = defaultCSRApiUrlConfig,
  onEvent = DEFAULT_ONEVENT,
}) => {
  var _a, _b, _c;
  const webUrlConfigs = getWebUrlConfigs(webUrlConfig);
  const apiUrlConfigs = getApiUrlConfigs(apiUrlConfig);
  const { createStateFromUrl: createStateFromUrl2 } = useWebUrl(webUrlConfigs);
  const urlState = typeof window !== 'undefined' ? createStateFromUrl2() : {};
  const finalState = getFinalState(urlState, defaultValues, apiUrlConfigs);
  const configObj = {
    productType: (
      (_a = finalState == null ? void 0 : finalState.category) == null
        ? void 0
        : _a.currentValue
    )
      ? 'CATEGORY'
      : (
          (_b = finalState == null ? void 0 : finalState.imageQuery) == null
            ? void 0
            : _b.currentValue
        )
      ? 'IMAGE_SEARCH'
      : 'SEARCH',
    webUrlConfig: webUrlConfigs,
    apiUrlConfig: apiUrlConfigs,
    defaultValues: __spreadValues(
      __spreadValues({}, DEFAULT_CONFIG),
      defaultValues,
    ),
  };
  const handleOnEvent = (0, import_react4.useCallback)(
    ({ type, message, value, state: state2 = {} }) => {
      try {
        onEvent({ type, message, value, state: state2 });
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(
            'An error occurred in the onEvent function: ' + error.message,
          );
        }
      }
    },
    [onEvent],
  );
  let [state, dispatch] = (0, import_react4.useReducer)(
    reducer,
    __spreadProps(__spreadValues({}, deepMerge(initialState, finalState)), {
      siteKey,
      apiKey,
      configs: configObj,
      onEvent: handleOnEvent,
      refresh: false,
      sdkVersion: package_default.version,
    }),
  );
  (0, import_react4.useEffect)(() => {
    var _a2, _b2, _c2;
    if (
      ((_a2 = apiUrlConfig == null ? void 0 : apiUrlConfig.category) == null
        ? void 0
        : _a2.page) &&
      ((_b2 = apiUrlConfig == null ? void 0 : apiUrlConfig.category) == null
        ? void 0
        : _b2.page) !== '' &&
      state.category.currentValue !==
        ((_c2 = apiUrlConfig == null ? void 0 : apiUrlConfig.category) == null
          ? void 0
          : _c2.page)
    ) {
      dispatch({
        type: UPDATE_CATEGORY,
        payload: {
          categoryPath:
            (apiUrlConfig == null ? void 0 : apiUrlConfig.category.page) || '',
          productType: 'CATEGORY',
          // refresh : state?.refresh
        },
      });
    }
  }, [
    (_c = apiUrlConfig == null ? void 0 : apiUrlConfig.category) == null
      ? void 0
      : _c.page,
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    UnbxdSearchContext.Provider,
    {
      value: { state, dispatch },
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(DataFetcherCSR, {
        children,
      }),
    },
  );
};

// src/hooks/UnbxdSearch/SSR/UnbxdSearchProviderSSR.tsx
var import_react6 = require('react');

// src/hooks/UnbxdSearch/SSR/DataFetcherSSR.tsx
var import_react5 = require('react');

// src/constants/defaultsSSR.ts
var DEFAULT_SET_WEB_URL2 = (newUrl = '', redirect = false, replace = false) => {
  if (replace) {
    window.history.replaceState(null, '', newUrl);
  } else window.history.pushState({}, '', newUrl);
};
var DEFAULT_SSR_HEADERS = { currentPath: '' };

// src/hooks/UnbxdSearch/SSR/helpersSSR.ts
var defaultSSRWebUrlConfig = __spreadProps(
  __spreadValues({}, commonDefaultWebUrlConfig),
  {
    setWebUrl: DEFAULT_SET_WEB_URL2,
  },
);
var defaultSSRApiUrlConfig = __spreadProps(
  __spreadValues({}, commonDefaultApiUrlConfig),
  {
    headers: DEFAULT_SSR_HEADERS,
  },
);
var initialState2 = __spreadProps(__spreadValues({}, commonInitialState), {
  configs: {
    productType: DEFAULT_PRODUCT_TYPE,
    spellCheck: DEFAULT_SPELLCHECK,
    webUrlConfig: defaultSSRWebUrlConfig,
    apiUrlConfig: defaultSSRApiUrlConfig,
  },
});

// src/hooks/UnbxdSearch/SSR/ssrApi.ts
var getResults3 = (..._0) =>
  __async(void 0, [..._0], function* (state = initialState2) {
    return getResults(state);
  });

// src/hooks/UnbxdSearch/SSR/utils.ts
var getUrlString2 = (hashMode, url) => {
  return hashMode ? url.split('#')[1] : url.split('?')[1];
};

// src/hooks/UnbxdSearch/SSR/ssrUrlUtils.ts
var createStateFromUrl = (url, config) => {
  const urlStr =
    url != null
      ? url
      : getUrlString2(config == null ? void 0 : config.hashMode, url);
  const params = getQueryParams(urlStr, url, config);
  const localstate = {};
  localstate['query'] = fetchStateValue(params, 'query', config);
  localstate['category'] = fetchStateValue(params, 'category', config);
  localstate['imageQuery'] = fetchStateValue(params, 'imageQuery', config);
  localstate['sort'] = fetchStateValue(params, 'sort', config);
  localstate['view'] = fetchStateValue(params, 'view', config);
  localstate['pageSize'] = fetchStateValue(params, 'pageSize', config);
  localstate['currentPage'] = fetchStateValue(params, 'pagination', config);
  localstate['selectedFacets'] = fetchFilterStateValue(params, config);
  return localstate;
};
var isFilter = (item, config) => {
  let isFilter2 = false;
  const keys = config == null ? void 0 : config.facets.keys;
  if (isUnbxdKey(item, config)) {
    isFilter2 = false;
  } else {
    isFilter2 =
      Object.values(keys).includes(item) ||
      item.includes('_uFilter') ||
      item == (config == null ? void 0 : config.key);
  }
  return isFilter2;
};
var isUnbxdKey = (item, config) => {
  var _a, _b, _c, _d, _e, _f, _g;
  let isUnbxdKey2 = false;
  if (
    [
      (_a = config == null ? void 0 : config.query) == null ? void 0 : _a.key,
      (_b = config == null ? void 0 : config.category) == null
        ? void 0
        : _b.key,
      (_c = config == null ? void 0 : config.sort) == null ? void 0 : _c.key,
      (_d = config == null ? void 0 : config.view) == null ? void 0 : _d.key,
      (_e = config == null ? void 0 : config.pageSize) == null
        ? void 0
        : _e.key,
      (_f = config == null ? void 0 : config.imageQuery) == null
        ? void 0
        : _f.key,
      (_g = config == null ? void 0 : config.pagination) == null
        ? void 0
        : _g.key,
    ].includes(item)
  ) {
    isUnbxdKey2 = true;
  }
  return isUnbxdKey2;
};
var isRangeFacet = (name, config) => {
  var _a, _b;
  return (_b =
    (_a = config == null ? void 0 : config.rangeFacets) == null
      ? void 0
      : _a.includes(name)) != null
    ? _b
    : false;
};
var isCategoryFacet = (name, config) => {
  var _a, _b;
  return (_b =
    (_a = config == null ? void 0 : config.categoryFacets) == null
      ? void 0
      : _a.includes(name)) != null
    ? _b
    : false;
};
var getKeyByValue = (object, value) => {
  return Object.keys(object).find(key => object[key] === value) || value;
};
var fetchFilterStateValue = (params, config) => {
  let selectedFacets = {};
  const configObj = config == null ? void 0 : config['facets'];
  const { addToUrl, keys, values, valuesSeparator } = configObj;
  if (addToUrl) {
    Object.keys(params).forEach(param => {
      const isTextFilter = isFilter(param, config);
      const isRangeFilter = isRangeFacet(param, config);
      const isCategoryFilter = isCategoryFacet(param, config);
      switch (true) {
        case isTextFilter: {
          const key = getKeyByValue(keys, param) || param;
          const value = params[param];
          const vals = value.map(val => {
            let mainVal = '';
            if (values == null ? void 0 : values[key]) {
              mainVal = getKeyByValue(
                values == null ? void 0 : values[key],
                val,
              );
            }
            return mainVal || val;
          });
          selectedFacets = __spreadProps(__spreadValues({}, selectedFacets), {
            [key]: { type: 'text', values: vals },
          });
          break;
        }
        case isRangeFilter: {
          const values2 = params[param];
          const formattedVals = values2.map(val => {
            const splitVal = val.split('-');
            return { start: splitVal[0], end: splitVal[1], dataId: val };
          });
          selectedFacets = __spreadProps(__spreadValues({}, selectedFacets), {
            [param]: { type: 'range', values: formattedVals },
          });
          break;
        }
        case isCategoryFilter: {
          const values2 = params[param].map(val => decodeURIComponent(val));
          selectedFacets = __spreadProps(__spreadValues({}, selectedFacets), {
            [param]: { type: 'multilevel', values: values2 },
          });
          break;
        }
        default: {
          break;
        }
      }
    });
  }
  return selectedFacets;
};
var fetchStateValue = (params, key, config) => {
  const localstate = {};
  const targetConfig = config == null ? void 0 : config[key];
  if (targetConfig == null ? void 0 : targetConfig.addToUrl) {
    const paramValue = params[encodeURIComponent(targetConfig.key)];
    if (paramValue) {
      if (key === 'pagination') {
        localstate[key] = (
          targetConfig == null ? void 0 : targetConfig.usePageNo
        )
          ? Number(paramValue)
          : Math.ceil(Number(paramValue) / Number(params.rows || 12)) + 1;
      } else if (key === 'pageSize') {
        localstate[key] = Number(paramValue);
      } else if (key === 'imageQuery') {
        localstate[key] = {
          imageQuery: paramValue,
          type: 'URL',
        };
      } else {
        const values = targetConfig.values || {};
        const value = getKeyByValue(values, paramValue) || paramValue;
        localstate[key] = value;
      }
    }
  }
  return localstate[key] || '';
};
var getQueryParamSeperator = config => {
  return (
    (config == null ? void 0 : config.queryParamSeperator) ||
    DEF_QUERY_PARAM_SEPERATOR
  );
};
var getKeySeperator = config => {
  return (
    (config == null ? void 0 : config.keySeperator) || DEF_KEY_VALUE_SEPERATOR
  );
};
var getQueryParams = (url, urlStr, config) => {
  let returnVal = {};
  if (url) {
    const queryParamSeperator = getQueryParamSeperator(config);
    const keySeperator = getKeySeperator(config);
    const finalKeySeperator =
      urlStr && keySeperator !== '='
        ? encodeURIComponent(getKeySeperator(config))
        : getKeySeperator(config);
    const splitUrl =
      ((config == null ? void 0 : config.hashMode)
        ? url.split('#')[1]
        : url.split('?')[1]) || url;
    const params = splitUrl.split(queryParamSeperator);
    params == null
      ? void 0
      : params.forEach(param => {
          var _a;
          const cleanParam =
            urlStr && param.endsWith('=') ? param.slice(0, -1) : param;
          const vlas = cleanParam.split(finalKeySeperator);
          const key = vlas[0];
          const val = vlas[1];
          returnVal = __spreadProps(__spreadValues({}, returnVal), {
            [decodeURIComponent(key)]:
              isFilter(key, config) ||
              isCategoryFacet(key, config) ||
              isRangeFacet(key, config)
                ? decodeFacetValue(val).split(
                    (_a = config == null ? void 0 : config.facets) == null
                      ? void 0
                      : _a.valuesSeparator,
                  )
                : decodeQueryParam(val),
          });
        });
  }
  return returnVal;
};
var getUrl = (key, configs, state) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const { webUrlConfig: config, productType } = configs;
  if (
    (key === 'query' && productType != 'SEARCH') ||
    (key === 'category' && productType != 'CATEGORY') ||
    (key === 'imageQuery' && productType !== 'IMAGE_SEARCH')
  ) {
    return '';
  }
  if (
    ((_a = config == null ? void 0 : config[key]) == null
      ? void 0
      : _a.addToUrl) &&
    state[key] !== void 0 &&
    ((_b = state[key]) == null ? void 0 : _b['currentValue']) !== ''
  ) {
    const values =
      (_c = config == null ? void 0 : config[key]) == null ? void 0 : _c.values;
    let value =
      (values == null
        ? void 0
        : values[(_d = state[key]) == null ? void 0 : _d['currentValue']]) ||
      ((_e = state[key]) == null ? void 0 : _e['currentValue']);
    if (key === 'imageQuery') {
      value =
        (value == null ? void 0 : value.type) === 'URL'
          ? value == null
            ? void 0
            : value.imageQuery
          : '';
    }
    if (key === 'pagination') {
      value =
        (values == null
          ? void 0
          : values[
              (_f = state[key]) == null ? void 0 : _f['currentPageInUrl']
            ]) || ((_g = state[key]) == null ? void 0 : _g['currentPageInUrl']);
      if (
        !((_h = config == null ? void 0 : config['pagination']) == null
          ? void 0
          : _h.usePageNo)
      ) {
        value =
          ((_i = state == null ? void 0 : state['pageSize']) == null
            ? void 0
            : _i.currentValue) *
          (value - 1);
      }
    }
    return `${
      key !== 'query' && key != 'category' && key != 'imageQuery'
        ? getQueryParamSeperator(config)
        : ''
    }${encodeURIComponent(
      config == null ? void 0 : config[key].key,
    )}${getKeySeperator(config)}${encodeURIComponent(value)}`;
  }
  return '';
};
var getFacetsUrl = (config, state) => {
  var _a, _b, _c;
  let url = '';
  if (
    (_a = config == null ? void 0 : config.facets) == null
      ? void 0
      : _a.addToUrl
  ) {
    const facetObj =
      ((_b = state == null ? void 0 : state['facets']) == null
        ? void 0
        : _b['selectedFacets']) || {};
    (_c = Object.keys(facetObj)) == null
      ? void 0
      : _c.forEach(facet => {
          var _a2, _b2, _c2, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
          const obj = facetObj[facet];
          const keys =
            (_a2 = config == null ? void 0 : config.facets) == null
              ? void 0
              : _a2.keys;
          const keyV = keys[facet] || facet;
          let valuesStr = ``;
          if (
            ((_b2 = facetObj[facet]) == null ? void 0 : _b2.type) === 'text'
          ) {
            const replacedValues =
              (_c2 = config == null ? void 0 : config.facets) == null
                ? void 0
                : _c2.values;
            valuesStr =
              (_f =
                (_d = obj == null ? void 0 : obj.values) == null
                  ? void 0
                  : _d.map(obj2 => {
                      var _a3, _b3;
                      return (
                        (_a3 = replacedValues[facet]) == null
                          ? void 0
                          : _a3[obj2]
                      )
                        ? encodeURIComponent(
                            (_b3 = replacedValues[facet]) == null
                              ? void 0
                              : _b3[obj2],
                          )
                        : encodeURIComponent(obj2);
                    })) == null
                ? void 0
                : _f.join(
                    (_e = config == null ? void 0 : config.facets) == null
                      ? void 0
                      : _e.valuesSeparator,
                  );
          } else if (
            ((_g = facetObj[facet]) == null ? void 0 : _g.type) === 'range'
          ) {
            valuesStr =
              (_j =
                (_h = obj == null ? void 0 : obj.values) == null
                  ? void 0
                  : _h.map(obj2 =>
                      encodeURIComponent(`${obj2.start}-${obj2.end}`),
                    )) == null
                ? void 0
                : _j.join(
                    (_i = config == null ? void 0 : config.facets) == null
                      ? void 0
                      : _i.valuesSeparator,
                  );
          } else if (
            ((_k = facetObj[facet]) == null ? void 0 : _k.type) === 'multilevel'
          ) {
            valuesStr =
              (_m =
                (_l = obj == null ? void 0 : obj.values) == null
                  ? void 0
                  : _l.map(obj2 => encodeURIComponent(obj2))) == null
                ? void 0
                : _m.join('>');
          }
          url += `${getQueryParamSeperator(config)}${keyV}${getKeySeperator(
            config,
          )}${valuesStr}`;
        });
  }
  return url;
};
var getExternalParams = config => {
  const externalParamsObj = {};
  const externalParams = config == null ? void 0 : config.externalParams;
  const params = getQueryParams(
    window.location.search,
    window.location.search,
    config,
  );
  let url = '';
  if (externalParams) {
    if (externalParams.length > 0) {
      Object.keys(params).forEach(param => {
        if (externalParams.includes(param)) {
          externalParamsObj[param] = params[param];
          url += `${getQueryParamSeperator(config)}${param}${getKeySeperator(
            config,
          )}${params[param]}`;
        }
      });
    } else {
      Object.keys(params).forEach(param => {
        if (
          !isFilter(param) &&
          !isRangeFacet(param) &&
          !isCategoryFacet(param) &&
          !isUnbxdKey(decodeURIComponent(param))
        ) {
          externalParamsObj[param] = params[param];
          url += `${getQueryParamSeperator(config)}${param}${getKeySeperator(
            config,
          )}${params[param]}`;
        }
      });
    }
  }
  return url;
};
var orderParams = (url, config) => {
  var _a;
  if (
    ((_a = config == null ? void 0 : config.orderOfParams) == null
      ? void 0
      : _a.length) > 0
  ) {
    let newUrl = '';
    const params = getQueryParams(url);
    const newParams = Object.keys(params).filter(
      item => !(config == null ? void 0 : config.orderOfParams.includes(item)),
    );
    const remainingKeys = [
      ...(config == null ? void 0 : config.orderOfParams),
      ...newParams,
    ];
    remainingKeys == null
      ? void 0
      : remainingKeys.forEach((param, index) => {
          var _a2, _b, _c;
          if (params[param]) {
            if (index > 0 && newUrl != '') {
              newUrl += `${getQueryParamSeperator(config)}`;
            }
            newUrl += `${encodeURIComponent(param)}${getKeySeperator(config)}`;
            if (
              param ===
              ((_a2 = config == null ? void 0 : config.query) == null
                ? void 0
                : _a2.key)
            ) {
              newUrl += encodeQueryParam(params[param]);
            } else if (
              (isFilter(param) ||
                isRangeFacet(param) ||
                isCategoryFacet(param)) &&
              Array.isArray(params[param])
            ) {
              newUrl +=
                (_c = params[param]) == null
                  ? void 0
                  : _c
                      .map(val => encodeFacetValue(val))
                      .join(
                        (_b = config == null ? void 0 : config.facets) == null
                          ? void 0
                          : _b.valuesSeparator,
                      );
            } else {
              newUrl += encodeURIComponent(String(params[param]));
            }
          }
        });
    return newUrl;
  }
  return url;
};
var generateWebUrl = (replace = false, configs, state) => {
  var _a, _b, _c;
  let url = '';
  const queryUrl = getUrl('query', configs, state);
  const browseUrl = getUrl('category', configs, state);
  const sortUrl = getUrl('sort', configs, state);
  const viewUrl = getUrl('view', configs, state);
  const imageUrl = getUrl('imageQuery', configs, state);
  const pageSizeUrl = getUrl('pageSize', configs, state);
  const currentPageUrl = getUrl('pagination', configs, state);
  const facetsUrl = getFacetsUrl(
    configs == null ? void 0 : configs.webUrlConfig,
    state,
  );
  const externalParamsUrl = getExternalParams(
    configs == null ? void 0 : configs.webUrlConfig,
  );
  url =
    (imageUrl || browseUrl || queryUrl) +
    sortUrl +
    viewUrl +
    pageSizeUrl +
    currentPageUrl +
    facetsUrl +
    externalParamsUrl;
  url = url.startsWith('&') ? url.substring(1) : url;
  if (window.location.search.split('?')[1] !== url) {
    let newUrl = '';
    const orderOfParams = orderParams(
      url,
      configs == null ? void 0 : configs.webUrlConfig,
    );
    if (orderOfParams.length > 0) {
      newUrl = `${window.location.pathname}${
        (
          (_a = configs == null ? void 0 : configs.webUrlConfig) == null
            ? void 0
            : _a.hashMode
        )
          ? '#'
          : '?'
      }${orderOfParams}`;
    } else newUrl = `${window.location.pathname}`;
    typeof ((_b = configs == null ? void 0 : configs.webUrlConfig) == null
      ? void 0
      : _b.setWebUrl) == 'function'
      ? (_c = configs == null ? void 0 : configs.webUrlConfig) == null
        ? void 0
        : _c.setWebUrl(newUrl, false, replace)
      : DEFAULT_SET_WEB_URL2(newUrl, false, replace);
  }
};

// src/hooks/UnbxdSearch/SSR/DataFetcherSSR.tsx
var import_jsx_runtime3 = require('react/jsx-runtime');
var DataFetcherSSR = ({ children }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
  const { state, dispatch } = useUnbxdStore();
  const {
    query,
    category,
    imageQuery,
    pagination: { pageToLoad } = {},
    configs: { webUrlConfig = {}, webUrlConfig: { setWebUrl } = {} } = {},
    configs = {},
  } = state;
  const handlePopState = () => {
    const params = createStateFromUrl(window.location.search, webUrlConfig);
    const newState = generateNewState(state, params);
    if (Object.keys(newState).length) {
      dispatch({
        type: UPDATE_ON_POPSTATE,
        payload: newState,
      });
    }
  };
  (0, import_react5.useEffect)(() => {
    dispatch({ type: ON_EVENT, payload: { type: INITIALISED } });
  }, []);
  (0, import_react5.useEffect)(() => {
    const retrieveData = shouldFetchData(query, category, imageQuery);
    if (retrieveData) {
      const params = createStateFromUrl(window.location.search, webUrlConfig);
      const newState = generateNewState(state, params);
      const fetchData = () =>
        __async(void 0, null, function* () {
          var _a2, _b2;
          try {
            dispatch({ type: ON_EVENT, payload: { type: BEFORE_API_CALL } });
            const responseObject = yield getResults3(state);
            if (responseObject == null ? void 0 : responseObject.error) {
              dispatch({
                type: UPDATE_ERROR,
                payload: { error: __spreadValues({}, responseObject) },
              });
              dispatch({
                type: ON_EVENT,
                payload: {
                  type: API_ERROR,
                  message:
                    responseObject == null ? void 0 : responseObject.message,
                },
              });
              return;
            }
            if (
              (_a2 =
                responseObject == null ? void 0 : responseObject.redirect) ==
              null
                ? void 0
                : _a2.value
            ) {
              setWebUrl &&
                setWebUrl(
                  (_b2 =
                    responseObject == null
                      ? void 0
                      : responseObject.redirect) == null
                    ? void 0
                    : _b2.value,
                  true,
                  false,
                );
            } else {
              generateWebUrl(pageToLoad ? true : false, configs, state);
              const formattedProducts = formatProducts(responseObject, state);
              const formattedFacets = formatFacets_default(
                responseObject == null ? void 0 : responseObject.facets,
              );
              dispatch({
                type: UPDATE_RESPONSE,
                payload: {
                  formattedProducts,
                  data: responseObject,
                  formattedFacets,
                },
              });
              dispatch({ type: ON_EVENT, payload: { type: AFTER_API_CALL } });
              if (pageToLoad) {
                dispatch({
                  type: UPDATE_PAGE_TO_LOAD,
                  payload: { pageToLoad: null },
                });
              }
            }
          } catch (error) {
            if (error instanceof Error) {
              const _c2 = error,
                { name, message, stack } = _c2,
                rest = __objRest(_c2, ['name', 'message', 'stack']);
              dispatch({
                type: UPDATE_ERROR,
                payload: {
                  error: __spreadValues({ name, message, stack }, rest),
                },
              });
              dispatch({
                type: ON_EVENT,
                payload: {
                  type: API_ERROR,
                  message: error.message || 'Unknown error',
                },
              });
            }
          }
        });
      if (Object.keys(newState).length > 0) {
        fetchData();
      }
    }
  }, [
    (_a = state == null ? void 0 : state.pagination) == null
      ? void 0
      : _a.currentValue,
    (_b = state == null ? void 0 : state.query) == null
      ? void 0
      : _b.currentValue,
    (_c = state == null ? void 0 : state.sort) == null
      ? void 0
      : _c.currentValue,
    (_d = state == null ? void 0 : state.pageSize) == null
      ? void 0
      : _d.currentValue,
    (_e = state == null ? void 0 : state.facets) == null
      ? void 0
      : _e.selectedFacets,
    (_f = state == null ? void 0 : state.view) == null
      ? void 0
      : _f.currentValue,
    state == null ? void 0 : state.refresh,
    (_h =
      (_g = state == null ? void 0 : state.imageQuery) == null
        ? void 0
        : _g.currentValue) == null
      ? void 0
      : _h.imageQuery,
  ]);
  (0, import_react5.useEffect)(() => {
    var _a2;
    ((_a2 = state == null ? void 0 : state.query) == null
      ? void 0
      : _a2.currentValue) && generateWebUrl(true, configs, state);
  }, [
    (_i = state == null ? void 0 : state.pagination) == null
      ? void 0
      : _i.currentPageInUrl,
    (_j = state == null ? void 0 : state.query) == null
      ? void 0
      : _j.currentValue,
  ]);
  (0, import_react5.useEffect)(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', handlePopState);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('popstate', handlePopState);
      }
    };
  }, [
    (_k = state == null ? void 0 : state.query) == null
      ? void 0
      : _k.currentValue,
    (_l = state == null ? void 0 : state.pagination) == null
      ? void 0
      : _l.currentValue,
    (_m = state == null ? void 0 : state.sort) == null
      ? void 0
      : _m.currentValue,
    (_n = state == null ? void 0 : state.pageSize) == null
      ? void 0
      : _n.currentValue,
    (_o = state == null ? void 0 : state.facets) == null
      ? void 0
      : _o.selectedFacets,
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_jsx_runtime3.Fragment,
    { children },
  );
};

// src/hooks/UnbxdSearch/SSR/UnbxdSearchProviderSSR.tsx
var import_jsx_runtime4 = require('react/jsx-runtime');
function UnbxdSearchProviderSSR({ children, initialData, apiUrlConfig }) {
  var _a;
  const [state, dispatch] = (0, import_react6.useReducer)(
    reducer,
    __spreadValues({}, initialData),
  );
  (0, import_react6.useEffect)(() => {
    var _a2, _b, _c;
    if (
      ((_a2 = apiUrlConfig == null ? void 0 : apiUrlConfig.category) == null
        ? void 0
        : _a2.page) &&
      ((_b = apiUrlConfig == null ? void 0 : apiUrlConfig.category) == null
        ? void 0
        : _b.page) !== '' &&
      state.category.currentValue !==
        ((_c = apiUrlConfig == null ? void 0 : apiUrlConfig.category) == null
          ? void 0
          : _c.page)
    ) {
      dispatch({
        type: UPDATE_CATEGORY,
        payload: {
          categoryPath:
            (apiUrlConfig == null ? void 0 : apiUrlConfig.category.page) || '',
          productType: 'CATEGORY',
        },
      });
    }
  }, [
    (_a = apiUrlConfig == null ? void 0 : apiUrlConfig.category) == null
      ? void 0
      : _a.page,
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    UnbxdSearchContext.Provider,
    {
      value: { state, dispatch },
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(DataFetcherSSR, {
        children,
      }),
    },
  );
}

// src/hooks/UnbxdSearch/SSR/UnbxdSearchSSRWrapper.tsx
var import_jsx_runtime5 = require('react/jsx-runtime');
var UnbxdSearchSSRWrapper = ({
  children,
  initialData = {},
  onEvent = DEFAULT_ONEVENT,
  setWebUrl = DEFAULT_SET_WEB_URL2,
}) => {
  var _a;
  const handleOnEvent = ({ type, message, value, state = {} }) => {
    try {
      onEvent({ type, message, value, state });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(
          'An error occurred in the onEvent function: ' + error.message,
        );
      }
    }
  };
  const finalState = __spreadProps(__spreadValues({}, initialData), {
    configs: __spreadProps(
      __spreadValues({}, initialData == null ? void 0 : initialData.configs),
      {
        webUrlConfig: __spreadProps(
          __spreadValues(
            {},
            (_a = initialData == null ? void 0 : initialData.configs) == null
              ? void 0
              : _a.webUrlConfig,
          ),
          {
            setWebUrl,
          },
        ),
      },
    ),
    onEvent: handleOnEvent,
  });
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(UnbxdSearchProviderSSR, {
    initialData: finalState,
    children,
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    UnbxdSearchCSRWrapper,
    UnbxdSearchSSRWrapper,
    useAutosuggest,
    useBanner,
    useBreadcrumb,
    useCategory,
    useFacets,
    usePageSize,
    usePagination,
    useProductView,
    useProducts,
    useQuery,
    useSorting,
    useVisualSearch,
  });
