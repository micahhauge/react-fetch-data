import React, { ReactElement } from 'react';

function LoadingPlaceholder(): ReactElement {
  const loadingCards = [1, 2, 3, 4].map((value) => (
    <div
      key={value}
      className="mb-2 border border-blue-300 shadow rounded-md p-6 max-w-xl w-full mx-auto"
    >
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

  return <div className="mt-10">{loadingCards}</div>;
}

export { LoadingPlaceholder };
