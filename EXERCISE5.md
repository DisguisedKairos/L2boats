# Exercise 5: StyleSheets and Flexbox

This applies the Week 04 lesson to the L2 Boats and L3 Animal Quiz apps.

| Slides | Lesson concept | Application in the apps |
| --- | --- | --- |
| 13 | Named styles with `StyleSheet.create()` | Layout, colour, spacing, borders, and text styles are named objects applied through `style`. |
| 14 | Combining styles in an array | Headers use `[styles.row, styles.brandRow]`. Boat labels and quiz buttons combine shared styles with their own appearance. |
| 19-22 | Parent and child styles; row and column directions | Header and answer rows arrange children horizontally. Lists and card content use a column layout. |
| 26-27 | Sharing space with `flex` | App containers fill the screen. Each quiz button uses `flex: 1` to receive an equal share of its row. |
| 29-30 | Restricting size | Content uses `maxWidth` and a percentage width so cards stay readable on phones and tablets. |
| 35-37 | `justifyContent` | Section headings place the title and count apart with `space-between`. Button content is centred. |
| 41-42 | `alignItems` | Header rows centre their children vertically. Column containers stretch cards across the available width. |
| 44 | Other flex properties | `gap` spaces items, `flexWrap` allows header items to wrap, and `alignSelf` centres the content column. |

The slides' sizing rules are applied to the elements that need them. Photos retain their proportions, and text can wrap instead of being given a fixed height.

## Source files

- [Boats screen](App.js): shared row/column styles, style arrays, header alignment, and content width.
- [Boat card](Boat.js): combined label styles, column content, borders, and spacing.
- [Animal Quiz](https://github.com/DisguisedKairos/L3Ex/blob/main/App.js): shared layout styles, combined button styles, equal flex sizing, and answer controls.

The six boat listings, six quiz questions, answer choices, scoring, and restart behavior are retained. The introductory descriptions previously removed from both headers remain removed.
