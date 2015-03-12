# angular-multiselect-dynamic

AngularJS multiselect directive based on [Amitava Saha's original](https://github.com/amitava82/angular-multiselect)

**Thank you, Amitava.**

Contributions welcome!

### Changes to original
Additions to multiselect directive based on some requirements I have for a multiselect:
- ms-selected-message: optional function to display a custom message for selected items
- txt-regex: optional regex applied on entered text before adding to dropdown
- multiselect template:
  - Added link to add an item
  - Added link to clear the filter text
- An item can also be added and auto-selected by typing it in and hitting enter
- added a filter 'textFilter'
- Depends on lodash for some convenience functions

### Known issues
- In the text filter, pressing escape is bringing back previously entered text, at least in Firefox

### Examples
Example: working on plunkr.

License
=======
The MIT License
