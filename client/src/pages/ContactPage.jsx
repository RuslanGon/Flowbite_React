import React, { useEffect } from 'react';
import { Datepicker } from 'flowbite-datepicker';

const ContactPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const datepickerElement = document.getElementById('datepicker-container');
      if (datepickerElement && !datepickerElement.querySelector('.datepicker')) {
        new Datepicker(datepickerElement, {
          inline: true,
        });
      }
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Контейнер для календаря */}
      <div id="datepicker-container" className="relative max-w-sm"></div>
    </div>
  );
};

export default ContactPage;
