import React, { useEffect } from 'preact/compat';
import { useState } from 'preact/hooks';
import type { gradientDirection, gradientType } from '@gradienttips/types';
import { ReactUsage } from './Usage/ReactUsage';
import { ApiUsage } from './Usage/ApiUsage';
import { CSSUsage } from './Usage/CSSUsage';

type tabs = 'CSS' | 'REACT' | 'ANGULAR' | 'API';

export function GradientUsage({
  gradient,
  direction,
}: {
  gradient: gradientType;
  direction: gradientDirection;
}) {
  const [selectedTab, pSetSelectedTab] = useState<tabs>('CSS');

  const setSelectedTab = (tab: tabs) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('usage', tab);
    const newRelativePathQuery =
      window.location.pathname + '?' + searchParams.toString();
    history.pushState(null, '', newRelativePathQuery);
    pSetSelectedTab(tab);
  };

  useEffect(() => {
    const urlTab = new URLSearchParams(window.location.search).get(
      'usage'
    ) as tabs | null;

    if (urlTab) {
      setSelectedTab(urlTab);
    }
  }, []);

  return (
    <div className="flex flex-col gap-2 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-3xl 2xl:max-w-4xl">
      <div className="tabs">
        <a
          className={`tab tab-lg tab-lifted ${
            selectedTab === 'CSS' ? 'tab-active' : ''
          }`}
          onClick={() => setSelectedTab('CSS')}
        >
          CSS
        </a>
        <a
          className={`tab tab-lg tab-lifted ${
            selectedTab === 'API' ? 'tab-active' : ''
          }`}
          onClick={() => setSelectedTab('API')}
        >
          API
        </a>
        <a
          className={`tab tab-lg tab-lifted ${
            selectedTab === 'REACT' ? 'tab-active' : ''
          }`}
          onClick={() => setSelectedTab('REACT')}
        >
          React
        </a>
        <a
          className={`tab tab-lg tab-lifted ${
            selectedTab === 'ANGULAR' ? 'tab-active' : ''
          }`}
          onClick={() => setSelectedTab('ANGULAR')}
        >
          Angular
        </a>
      </div>

      {selectedTab === 'CSS' && (
        <CSSUsage gradient={gradient} direction={direction} />
      )}
      {selectedTab === 'API' && <ApiUsage gradient={gradient} />}
      {selectedTab === 'REACT' && (
        <ReactUsage gradient={gradient} direction={direction} />
      )}
      {selectedTab === 'ANGULAR' && (
        <div className="flex flex-col gap-8">Coming soon...</div>
      )}
    </div>
  );
}
