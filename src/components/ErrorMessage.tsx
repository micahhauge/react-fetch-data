import React, { ReactElement } from 'react';
import FadeIn from 'react-fade-in';

function ErrorNotification(): ReactElement {
  return (
    <FadeIn>
      <div className="grid justify-items-center mt-10">
        <div
          className="w-full max-w-xl bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-9"
          role="alert"
        >
          <p className="font-bold">Whoops!</p>
          <p>Looks like something went wrong loading the list of Movies.</p>
        </div>
      </div>
    </FadeIn>
  );
}

export { ErrorNotification };
