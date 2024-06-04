# Native Stylist

[![npm version](https://img.shields.io/npm/v/native-stylist)](https://www.npmjs.com/package/native-stylist)
[![Build Status](https://img.shields.io/travis/yourusername/native-stylist/master)](https://travis-ci.org/yourusername/native-stylist)
[![License](https://img.shields.io/npm/l/native-stylist)](https://opensource.org/licenses/MIT)

Native Stylist is an npm package designed to streamline the process of styling React Native components. It provides a set of utilities to manage styles more efficiently and consistently.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Examples](#examples)

## Installation

You can install Native Stylist using npm or yarn:

```sh
npm install native-stylist
```

or

```sh
yarn add native-stylist
```

## Usage

Here is a basic example of how to use Native Stylist in your React Native project:

```javascript
import { View, Text } from 'native-stylist';

export default function App() {
  return (
    <>
      <View p2>
        <Text xlarge bold>Hello, world!</Text>
        <Text medium lightish>How are you doing?</Text>
      </View>
      <View flexRow justifyBetween>
        <Text>
          I'm left!
        </Text>
        <Text>
          I'm right!
        </Text>
      </View>
    </>
  );
}
```

## API

### `<View />` Component

The `View` component exported from Native Stylist is an enhanced version of the standard React Native `View` component. It supports additional boolean properties for margins and paddings, making it easier to apply spacing.

The spacing unit is 8. In the future I'd like to allow for changing this, but for now it's set.

#### Margin Properties

- `m1` to `m8`: Sets margin of 1 to 8 units on all sides.
- `mt1` to `mt8`: Sets margin top of 1 to 8 units.
- `mr1` to `mr8`: Sets margin right of 1 to 8 units.
- `mb1` to `mb8`: Sets margin bottom of 1 to 8 units.
- `ml1` to `ml8`: Sets margin left of 1 to 8 units.
- `mHalf`, `mtHalf`, `mrHalf`, `mbHalf`, `mlHalf`: Sets margin on one or all sides to a half unit

#### Padding Properties

- `p1` to `p8`: Sets padding of 1 to 8 units on all sides.
- `pt1` to `pt8`: Sets padding top of 1 to 8 units.
- `pr1` to `pr8`: Sets padding right of 1 to 8 units.
- `pb1` to `pb8`: Sets padding bottom of 1 to 8 units.
- `pl1` to `pl8`: Sets padding left of 1 to 8 units.
- `pHalf`, `ptHalf`, `prHalf`, `pbHalf`, `plHalf`: Sets padding on one or all sides to a half unit

#### Gap Properties

- `gap1` to `gap8`: Sets gap of 1 to 8 units between children.

#### Grow/Shrink Properties

- `grow1`: Sets `{ flexGrow: 1 }`
- `shrink1`: Sets `{ flexShrink: 1 }`

#### Layout

- `absolute`: Sets `{ position: 'absolute' }`
- `relative`: Sets `{ position: 'relative' }`
- `pinToTop`: Sets `{ top: 0 }`
- `pinToRight`: Sets `{ right: 0 }`
- `pinToBottom`: Sets `{ bottom: 0 }`
- `pinToLeft`: Sets `{ left: 0 }`
- `fullWidth`: Sets `{ width: '100%' }`
- `halfWidth`: Sets `{ width: '50%' }`
- `flex1`: Sets `{ flex: 1 }`
- `flexRow`: Sets `{ flexDirection: 'row' }`
- `flexColumn`: Sets `{ flexDirection: 'column' }`
- `justifyStart`: Sets `{ justifyContent: 'flex-start' }`
- `justifyCenter`: Sets `{ justifyContent: 'center' }`
- `justifyEnd`: Sets `{ justifyContent: 'flex-end' }`
- `justifyBetween`: Sets `{ justifyContent: 'space-between' }`
- `alignStart`: Sets `{ alignItems: 'flex-start' }`
- `alignCenter`: Sets `{ alignItems: 'center' }`
- `alignEnd`: Sets `{ alignItems: 'flex-end' }`
- `z1` to `z4`: Sets `zIndex` to 1 to 4
- `br1` to `br4`: Sets `borderRadius` to 14, 8, 16, and 32 units
- `overflowHidden`: Sets `{ overflow: 'hidden' }`

#### Shadow Properties

- `shadow`: Sets a shadow with a default configuration
- `shadowUp`: Sets a shadow that goes up, good for using on a fix bottom bar

#### Background Color Properties

(This needs to be improved)

- `bgWhite`: Sets background color to white
- `bgGray`: Sets background color to gray

### Example Usage

```javascript
import React from 'react';
import { View, Text } from 'native-stylist';

export default function App() {
  return (
    <View>
    </View>
  );
}
```

## Examples

### Fonts and Colors


```javascript
// TODO: This
```
