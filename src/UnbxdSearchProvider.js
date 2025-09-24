import React, { createContext, useContext, useState, useCallback } from 'react';

import {UnbxdSearchCSRWrapper} from '@unbxd-ui/react-search-hooks';
import {
  UNBXD_SITE_KEY_EN,
  UNBXD_SITE_KEY_AR,
  UNBXD_API_KEY_EN,
  UNBXD_API_KEY_AR,
} from '@env';
import {useTranslation} from 'react-i18next';

/**
 * UnbxdSearchProvider - React Native Compatible Unbxd Search Context Provider
 *
 * This provider wraps the entire app to provide Unbxd search functionality
 * across all components using direct API calls instead of the web-only hooks library.
 *
 * Usage:
 * - Wrap your App component with this provider
 * - All child components can access Unbxd search functions via context
 * - Uses direct API calls compatible with React Native
 * - Provides search, facets, and other Unbxd functionality
 */

// Create search context
const UnbxdSearchContext = createContext(null);

/** ------- tiny logger that works in Release (device logs/Console.app) ------- */
const LOG = true; // flip to false after debugging
const log = (...args) => {
  try {
    if (LOG && console && console.log) console.log('[UNBXD]', ...args);
  } catch {}
};

/** ---------------- Patch fetch ONCE, handle string or Request ---------------- */
(function () {
  if (global.__UNBXD_FETCH_PATCHED__) return;

  const nativeFetch = global.fetch;
  const isUnbxd = u => typeof u === 'string' && u.includes('search.unbxd.io');
  const readUrl = input =>
    typeof input === 'string'
      ? input
      : typeof Request !== 'undefined' && input instanceof Request
      ? input.url
      : null;

  const fixDoubleEncodedPercent = u =>
    u && u.includes('%25') ? u.replace(/%25/g, '%') : u;

  const cloneWithUrl = (input, fixedUrl, init) => {
    if (typeof Request !== 'undefined' && input instanceof Request) {
      // Most Unbxd calls are GET; preserve method/headers if present
      const opts = {method: input.method, headers: input.headers};
      return new Request(fixedUrl, init ? {...opts, ...init} : opts);
    }
    return fixedUrl;
  };

  global.fetch = (input, init) => {
    try {
      const url = readUrl(input);
      if (url && isUnbxd(url)) {
        const fixed = fixDoubleEncodedPercent(url);
        if (fixed !== url) log('fixing URL', {from: url, to: fixed});
        else log('URL', url);
        const nextInput =
          fixed === url ? input : cloneWithUrl(input, fixed, init);
        return nativeFetch(nextInput, init);
      }
      return nativeFetch(input, init);
    } catch (e) {
      log('patch error, using nativeFetch', String((e && e.message) || e));
      return nativeFetch(input, init);
    }
  };

  global.__UNBXD_FETCH_PATCHED__ = true;
})();

const UnbxdSearchProvider = ({children}) => {
console.log("children =====>", children);

  const {i18n} = useTranslation();
  const currLang = i18n.resolvedLanguage || i18n.language || 'en'; // fallback to 'en'

  // const originalFetch = global.fetch;
  // global.fetch = async (url, options = {}) => {
  //   if (typeof url === 'string' && url.includes('search.unbxd.io')) {
  //     // Check for specific encoding issues that need fixing
  //     const hasDoubleEncodedPercent = url.includes('%25');
  //     const hasEncodedFilter = url.includes('%3A') || url.includes('%20');
  //     const hasEncodedParams = url.includes('%3D') || url.includes('%26');

  //     // Only fix if we detect specific encoding issues
  //     if (hasDoubleEncodedPercent || hasEncodedFilter || hasEncodedParams) {
  //       try {
  //         const fixedUrl = decodeURIComponent(url);
  //         // Verify the URL is still valid after decoding
  //         new URL(fixedUrl);
  //         //console.log('🔧 Fixing encoded Unbxd URL:', fixedUrl);
  //         return originalFetch(fixedUrl, options);
  //       } catch (error) {
  //         //console.warn('⚠️ URL decode failed, using original:', error.message);
  //         return originalFetch(url, options);
  //       }
  //     }
  //   }
  //   return originalFetch(url, options);
  // };

  // Debug: Log raw environment variables
  console.log('Raw env vars:', {
    UNBXD_SITE_KEY_EN,
    UNBXD_SITE_KEY_AR,
    UNBXD_API_KEY_EN,
    UNBXD_API_KEY_AR,
  });

  // Additional debug: Check if any env vars are loaded
  console.log('Environment variables check:', {
    'typeof UNBXD_SITE_KEY_EN': typeof UNBXD_SITE_KEY_EN,
    'typeof UNBXD_API_KEY_EN': typeof UNBXD_API_KEY_EN,
    'UNBXD_SITE_KEY_EN length': UNBXD_SITE_KEY_EN ? UNBXD_SITE_KEY_EN.length : 'undefined',
    'UNBXD_API_KEY_EN length': UNBXD_API_KEY_EN ? UNBXD_API_KEY_EN.length : 'undefined',
  });

  // Fallback values if environment variables are not loaded
  const fallbackSiteKeyEn = "ss-unbxd-aapac-dev-hnak-ksa-en65721746766584";
  const fallbackSiteKeyAr = "ss-unbxd-aapac-dev-hnak-ksa-ar65721746766945";
  const fallbackApiKeyEn = "1f64681d3ab16827d9713297e6bf7cfe";
  const fallbackApiKeyAr = "0c1cc275c473472802d879e0f5168c7c";

  const siteKey = currLang === 'en'
    ? (UNBXD_SITE_KEY_EN || fallbackSiteKeyEn)
    : (UNBXD_SITE_KEY_AR || fallbackSiteKeyAr);
  const apiKey = currLang === 'en'
    ? (UNBXD_API_KEY_EN || fallbackApiKeyEn)
    : (UNBXD_API_KEY_AR || fallbackApiKeyAr);

  console.log(
    'currLang =>',
    currLang,
    ' SITE_KEY=>',
    siteKey,
    ' API_KEY=>',
    apiKey,
  );
  // Guard: if keys missing, skip SDK to avoid Release crash
  if (!siteKey || !apiKey) {
    console.log('Missing env keys, skipping Unbxd init', {
      siteKeyPresent: !!siteKey,
      apiKeyPresent: !!apiKey,
    });
    return <>{children}</>;
  }

  return (
    <UnbxdSearchCSRWrapper
      siteKey={siteKey}
      apiKey={apiKey}
      onEvent={
        __DEV__
          ? ({type, message, value, state}) => {
              // Global event handler for Unbxd events
              //console.log(`${type}:`, message, value);
              console.log('state =>', state);
            }
          : undefined
      }
      setWebUrl={() => {}}
      apiUrlConfig={{
        variants: {
          enabled: true,
        },
        facetMultiSelect: true,
      }}>
      {children}
    </UnbxdSearchCSRWrapper>
  );
};

export default UnbxdSearchProvider;
