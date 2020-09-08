# netlinav

## Things to check for

- Semantic HTML
- Accessibility
- Is it bug free?
- Refactorable, modern JS
- Is it reasonably DRY?
- Check performance

## Index.js

Modernize JS

- Change from `var` to `let/const`.
- Switch out classic forloop for newer for...of loop.
- Clearer variable naming - `inputs` could refer to any input and `defineSetting` wasn't clear that it was changing the nav level.
- The nav level switching function was verbose except for the difference in `classlist` `add` vs. `remove`. It made it tough to quickly see what was being shown and hidden in each scenario. I changed it to hide everything as a type of reset so that it was clear that no items were accidently missed and it also makes it easier to see which items get displayed for each. Note: The hiding and showing are batched in a render cycle so there won't be a point where the nav is missing entirely.

## Index.html

### Semantic changes

- The little switcher is visibly similar to a footer, but it is also a type of nav. I went back and forth over what semantic tag would be best and landed on footer. I didn't want to focus too much on it because it would likely be remove in production.
- Add a `header` and `nav` around each navbar, use `main` around the main content, use `article` for each card.
- `h5` was being used for styling links in the nav. That tag should be used for headings.
- Extra dropdown `div`s were removed. They didn't seem to be needed.
- The names `nav1`, `nav2`, and `nav3` were very generic which made it tougher to read

### Accessibility

- The inactive nav link text contrast looks kind of low, but it passes WCAG AA
- Added a skip link.
- Added svg title to the team dropdown.
- Added aria labels and titles to the avatar and notification buttons.
- Added an aria role description to the logo.

## Index.css

- Break out css by components so that it is easier to maintain.
- Organize css by specificity (from low to high).
- Remove unused css

## If I had more time

- Fix the flicker when quickly hovering over the user avatar.
- Add polyfills so that it works in EI11
- The nav level switcher is not accessible. The user cannot tab to it. I'm not sure this matters too much because I doubt the switcher would be used in production.