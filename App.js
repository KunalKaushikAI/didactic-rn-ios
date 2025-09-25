// App.js

// --- tiny polyfills some web libs expect (safe in RN) ---
import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';
if (!global.atob) global.atob = require('base-64').decode;
if (!global.btoa) global.btoa = require('base-64').encode;

import React, { useEffect, useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Button, Platform, InteractionManager } from 'react-native';

// NOTE: wdynamically require UnbxdSearchProvider AFTER shims are installed
// import UnbxdSearchProvider from './src/UnbxdSearchProvider';
import UnbxdFacetScreen from './src/UnbxdFacetScreen';

// -------------------- RN WEB SHIMS: install once (with logs) --------------------
(function installRNWebShims() {
  if (global.__RN_WEB_SHIMS__) return;
  try {
    const g = globalThis;
    if (!g.window) g.window = g;
    if (!g.document) g.document = {};
    if (!g.navigator) g.navigator = { product: 'ReactNative', userAgent: 'react-native' };

    const BASE = 'app://unbxd.local/';
    function apply(u) {
      const loc = g.location;
      loc.href = u.href; loc.origin = u.origin; loc.protocol = u.protocol;
      loc.host = u.host; loc.hostname = u.hostname; loc.port = u.port;
      loc.pathname = u.pathname; loc.search = u.search; loc.hash = u.hash;
    }
    function updateFrom(urlLike) {
      try { apply(new URL(urlLike, g.location?.href || BASE)); } catch {}
    }

    if (!g.location) {
      g.location = {
        href: BASE, origin: 'app://unbxd.local', protocol: 'app:',
        host: 'unbxd.local', hostname: 'unbxd.local', port: '',
        pathname: '/', search: '', hash: '',
        assign(u){ updateFrom(u); }, replace(u){ updateFrom(u); },
        toString(){ return this.href; },
      };
    }
    if (!g.history) {
      g.history = {
        length: 1, state: null,
        pushState: (st, _t, url) => { g.history.state = st; g.location.assign(url); console.log('[SHIM] history.pushState → search', g.location.search); },
        replaceState: (st, _t, url) => { g.history.state = st; g.location.replace(url); console.log('[SHIM] history.replaceState → search', g.location.search); },
        go(){}, back(){}, forward(){},
      };
    }

    // seed an empty ?search (or seed your saved filters here)
    g.location.replace('app://unbxd.local/');

    console.log('[SHIM] installed. initial window.location.search =', g.location.search);
    g.__RN_WEB_SHIMS__ = true;
  } catch (e) {
    console.log('[SHIM] install error:', String(e?.message || e));
  }
})();

// -------------------- OPTIONAL: log Unbxd network calls (non-breaking) ---------
(function attachUnbxdFetchLogger() {
  if (global.__UNBXD_FETCH_LOGGER__) return;
  try {
    const nativeFetch = global.fetch;
    global.fetch = (input, init) => {
      const url = typeof input === 'string'
        ? input
        : (typeof Request !== 'undefined' && input instanceof Request ? input.url : null);
      if (url && url.includes('search.unbxd.io')) {
        console.log('[UNBXD] fetch →', url);
      }
      return nativeFetch(input, init);
    };
    global.__UNBXD_FETCH_LOGGER__ = true;
  } catch (e) {
    console.log('[UNBXD] fetch logger attach error:', String(e?.message || e));
  }
})();

// -------------------- Global fatal handler so Release won’t be silent ----------
const EU = global.ErrorUtils;
EU?.setGlobalHandler?.((e, fatal) => {
  try { console.log('[FATAL]', fatal, String(e?.message || e), e?.stack); } catch {}
});

// --------------------------------------------------------------------------------

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ padding: 40 }}>
      <Button
        title="Facet Screen"
        onPress={() => navigation.navigate('UnbxdFacet')}
      />
    </View>
  );
}

// Defer mounting Unbxd on iOS until the first frame is committed (prevents splash/white)
function DeferIOS({ children }) {
  const [ready, setReady] = useState(Platform.OS !== 'ios');
  useEffect(() => {
    if (Platform.OS !== 'ios') return;
    requestAnimationFrame(() => {
      InteractionManager.runAfterInteractions(() => {
        console.log('[DEFER] first frame committed, mounting Unbxd…');
        setReady(true);
      });
    });
  }, []);
  return ready ? children : null;
}

const App = () => {
  useEffect(() => {
    console.log('hello unbxd......');
  }, []);

  // Load provider AFTER shims so Unbxd evaluates in a “browser-like” env
  const UnbxdSearchProvider = useMemo(
    () => require('./src/UnbxdSearchProvider').default,
    []
  );
  console.log('[UNBXD] provider loaded after shims =', !!UnbxdSearchProvider);

  const navTree = (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UnbxdFacet" component={UnbxdFacetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  return Platform.OS === 'ios'
    ? <DeferIOS><UnbxdSearchProvider>{navTree}</UnbxdSearchProvider></DeferIOS>
    : <UnbxdSearchProvider>{navTree}</UnbxdSearchProvider>;
};

export default App;

