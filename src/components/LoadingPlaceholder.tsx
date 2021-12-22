import React, { ReactElement } from 'react';
import FadeIn from 'react-fade-in';

function LoadingPlaceholder(): ReactElement {
  const loadingCards = [1, 2, 3, 4, 5, 6, 7].map((value) => (
    <div key={value} className="p-6 max-w-xl w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-sm bg-gray-700 w-20 h-24"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-gray-700 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-gray-700 rounded col-span-2"></div>
              <div className="h-2 bg-gray-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="grid justify-items-center mt-10">
      <div className="max-w-xl w-full rounded-lg shadow-md px-auto">
        <ul>
          <FadeIn className="divide-y divide-gray-100">{loadingCards}</FadeIn>
        </ul>
      </div>
    </div>
  );
}

export { LoadingPlaceholder };
