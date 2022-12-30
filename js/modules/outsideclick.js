export default function outsideClick(element, events, callback) {
  const outside = 'data-ouside';
  const html = document.documentElement;

  function handleOutsideClick(e) {
    if (!element.contains(e.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        setTimeout(() => html.removeEventListener(userEvent, handleOutsideClick));
      });
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
    });
    element.setAttribute(outside, '');
  }
}
