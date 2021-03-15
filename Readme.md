## Modal


### What happens:

There will be a button, if you click it, the modal  will pop up. Then you will see a Cross-signed  button, if you click that, the modal will be closed. 



### Task:

To activate the modal, `is-active` class is needed to be added to the `modal` class container.

To deactivate the modal, `is-active` class is needed to be removed from the `modal` class container.



### How to complete the task with Vue.js

1.  Add   `is-active` class on the `modal` class container by using v-bind: directive to reactively update it.
2. Make a function which will toggle (add and remove) `is-active` class on the `modal` class container when the button is clicked.
3.  Add a click event on the button which will fire the `'is-active class toggling function'` and open the modal.
4. Add the same click event on `modal-close` class container which will fire the '`is-active class toggling function'`  to close the button.

